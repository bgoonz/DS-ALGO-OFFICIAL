

    //<!--------------------------------------------------------------------------------------------------------->

    delete Array.prototype.p; // remove alias added above

    $( document ).ready( function () {
      var numberOfFiles = 489;

      var linkFiles = true;
      var linkProtocol = "";
      var linkRoot = "./";
      var sourceRoot = ".";
      var sourceParent = sourceRoot.substring(
        0,
        sourceRoot.lastIndexOf( "/" ) + 1
      );
      var originalHash = location.hash.replace( /#/, "" );
      var SelectedFolderID = "-1";
      var currentView;
      var onlyLinkExtensions = []; // example: ["jpg","png"]

      /* ---  Init --- */

      $( "#tot_size" ).text( bytesToSize( $( "#tot_size" ).text() ) );

      $( "#loading" ).remove();
      $( "#content" ).show();

      // set size of areas
      $( "#content" ).height(
        $( "#wrapper" ).outerHeight( true ) -
        $( "#app_header" ).outerHeight( true ) -
        1
      );
      setTimeout( function () {
        $( "#list_files" ).height(
          $( "#content" ).height() -
          $( "#list_header" ).outerHeight( true ) -
          $( "#list_footer" ).outerHeight( true ) -
          1
        );
      }, 1 );

      $( "#content" ).splitter( {
        sizeLeft: 200
      } );

      // build parent folder lookup
      window.parent_folders = [];
      parent_folders[ 0 ] = 0;
      var numDirs = dirs.length;
      for ( var id = 0; id < numDirs; id++ ) {
        var subdirs = getSubdirs( id );
        if ( subdirs != "" ) {
          for ( var c = 0; c < subdirs.length; c++ ) {
            parent_folders[ subdirs[ c ] ] = id;
          }
        }
      }

      $.tablesorter.addParser( {
        // set a unique id
        id: "datasort",
        is: function ( s, table, cell, $cell ) {
          // return false so this parser is not auto detected
          return false;
        },
        format: function ( s, table, cell, cellIndex ) {
          var $cell = $( cell );
          // returns data-attribute, or cell text (s) if it doesn't exist
          return $cell.attr( "data-sort" ) || s;
        },
        // flag for filter widget (true = ALWAYS search parsed values; false = search cell text)
        parsed: false,
        // set type, either numeric or text
        type: "numeric",
      } );

      /* --- Events --- */

      $( "#search_form" ).submit( function () {
        return false;
      } );

      var addFolderClickEventHandlers = function () {
        $( "#list_files a.folder_link" ).click( function () {
          expandToFolder( $( this ).attr( "id" ) );
          return false;
        } );
      };

      // handle clicks on folders in file list
      $( "body" ).delegate( "a.folder_link", "click", function () {
        expandToFolder( $( this ).attr( "id" ) );
        return false;
      } );

      // Handle window resize
      var resizeHandler = debounce( function () {
        // resize is mostly automatic, but we need set the height manually and to tell the splitter to redraw
        $( "#content" ).height(
          $( "#wrapper" ).outerHeight( true ) -
          $( "#app_header" ).outerHeight( true ) -
          1
        );
        $( "#content" ).trigger( "resize" );
        // for some reason it still did not redraw correctly unless I added a second resize trigger...
        $( "#content" ).height(
          $( "#wrapper" ).outerHeight( true ) -
          $( "#app_header" ).outerHeight( true ) -
          1
        );
        $( "#content" ).trigger( "resize" );
        // also re-calculate height of file list
        $( "#list_files" ).height(
          $( "#content" ).height() -
          $( "#list_header" ).outerHeight( true ) -
          $( "#list_footer" ).outerHeight( true ) -
          1
        );
      }, 250 );
      window.addEventListener( "resize", resizeHandler );

      /* --- Search for files --- */

      var searchDelay = 250;
      if ( numberOfFiles > 1000 ) searchDelay = 1000;

      var searchKeyPressHandler = debounce( function ( keyEvent ) {
        // cancel debounced event if no keyEvent
        if ( !keyEvent ) return;

        // skip searching on keys: tab, shift, ctrl, alt, end, home, arrows
        var keysToSkip = [ 9, 16, 17, 18, 35, 36, 37, 38, 39, 40 ];
        if ( keysToSkip.indexOf( keyEvent.keyCode ) !== -1 ) {
          return;
        }

        // on mobile, skip auto search on keypress
        if ( /Mobi/.test( navigator.userAgent ) ) {
          return;
        }

        doSearch( false );
      }, searchDelay );
      document
        .getElementById( "search_text" )
        .addEventListener( "input", searchKeyPressHandler ); // for handling pressing the x
      document
        .getElementById( "search_text" )
        .addEventListener( "keypress", searchKeyPressHandler );
      document
        .getElementById( "search_text" )
        .addEventListener( "keypress", function ( keyEvent ) {
          if ( keyEvent.keyCode == 13 ) {
            // on enter key search immediately
            searchKeyPressHandler( null ); // cancel any current debounced event
            doSearch( true );
          }
        } );

      var SearchFilenames = [];
      var SearchLocations = [];
      var SearchLocationsRaw = [];
      var SearchLocationsID = [];
      var SearchIsDir = [];
      var PreviouslySelectedNode = null;
      var PreviousSearchFor = "";
      var PreviousSearchForMode = "all";
      var currentDir = "";
      var currentDirID = -1;

      function doSearch( enterPressed ) {
        var SearchFor = $( "#search_text" ).val().toLowerCase();

        if ( String.prototype.trim ) {
          // in case not available in browser
          SearchFor = SearchFor.trim();
        }

        // prevent automatic search for short queries
        if ( SearchFor.length > 0 && SearchFor.length <= 2 && !enterPressed )
          return;

        // search only current folder and optionally subfolders using > and >>
        var SearchForMode = "all";
        var searchThisDirOnly = false;
        var searchThisDirOnlyIncludeSubdirs = false;
        if ( SearchFor.indexOf( ">" ) === 0 ) {
          searchThisDirOnly = true;
          SearchForMode = "dir";
          SearchFor = SearchFor.substr( 1 ); // removes first character
          if ( SearchFor.indexOf( ">" ) === 0 ) {
            searchThisDirOnlyIncludeSubdirs = true;
            SearchFor = SearchFor.substr( 1 );
            SearchForMode = "subdirs";
          }
        }

        // prevent searching twice
        if (
          SearchFor === PreviousSearchFor &&
          PreviousSearchForMode === SearchForMode
        )
          return;
        PreviousSearchFor = SearchFor;
        PreviousSearchForMode = SearchForMode;

        if ( SearchFor === "" ) {
          if ( PreviouslySelectedNode != null ) {
            PreviouslySelectedNode.activate();
            PreviouslySelectedNode = null;
          }
          return;
        }

        var showLocationColumn = true;

        if ( numberOfFiles > 5000 ) {
          $( "#search_indicator" ).show();
          //$("#list_header").html( "Searching..." );
          showLocationColumn = false;
        }

        location.hash = "";

        setTimeout( function () {
          // timeout allows redrawing screen before possible time consuming search

          if ( SelectedFolderID != -1 ) {
            PreviouslySelectedNode = $( "#treeview" ).dynatree( "getActiveNode" );
            SelectedFolderID = "-1";
            $( "#treeview" ).dynatree( "getActiveNode" ).deactivate();
          }

          var hide_root = sourceRoot.length > 3;
          var numDirs = dirs.length;
          var c;

          // if no previous search, do some pre-processing for faster search
          if ( SearchFilenames.length === 0 ) {
            var nFound = 0;
            for (
              c = 1; c < numDirs; c++ // dirs first...
            ) {
              SearchFilenames[ nFound ] = dirs[ c ][ 0 ].split( "*" );
              SearchFilenames[ nFound ][ 0 ] = getDirName( c );
              SearchFilenames[ nFound ][ 3 ] = SearchFilenames[ nFound ][
              0 ]; // keep original name (in non-lowercase)
              SearchFilenames[ nFound ][ 0 ] =
                SearchFilenames[ nFound ][ 0 ].toLowerCase();
              //SearchFilenames[nFound][1] = Number(SearchFilenames[nFound][1]);
              SearchFilenames[ nFound ][ 1 ] = Number( getDirTreeSize( c ) );
              SearchLocationsRaw[ nFound ] = getDirNameAndPath( c );
              if ( hide_root )
                SearchLocations[ nFound ] = SearchLocationsRaw[
                  nFound
                ].substring( sourceParent.length );
              else SearchLocations[ nFound ] = SearchLocationsRaw[ nFound ];
              SearchLocations[ nFound ] = SearchLocations[ nFound ].replace(
                /\//g,
                "\\"
              ); // replace forward slash / with windows style \ backslash
              SearchLocationsID[ nFound ] = c;
              SearchIsDir[ nFound ] = true;
              nFound++;
            }
            for (
              c = 0; c < numDirs; c++ // ...then all files
            ) {
              var arrLength = dirs[ c ].length;
              for ( var c2 = 1; c2 < arrLength - 2; c2++ ) {
                SearchFilenames[ nFound ] = dirs[ c ][ c2 ].split( "*" );
                SearchFilenames[ nFound ][ 3 ] = SearchFilenames[ nFound ][
                0 ]; // keep original name (in non-lowercase)
                SearchFilenames[ nFound ][ 0 ] =
                  SearchFilenames[ nFound ][ 0 ].toLowerCase();
                SearchFilenames[ nFound ][ 1 ] = Number(
                  SearchFilenames[ nFound ][ 1 ]
                );
                SearchLocationsRaw[ nFound ] = getDirNameAndPath( c );
                if ( hide_root )
                  SearchLocations[ nFound ] = SearchLocationsRaw[
                    nFound
                  ].substring( sourceParent.length );
                else SearchLocations[ nFound ] = SearchLocationsRaw[ nFound ];
                SearchLocations[ nFound ] = SearchLocations[ nFound ].replace(
                  /\//g,
                  "\\"
                ); // replace forward slash / with windows style \ backslash
                SearchLocationsID[ nFound ] = c;
                SearchIsDir[ nFound ] = false;
                nFound++;
              }
            }
          }

          var locationHtml = "";

          if ( showLocationColumn ) locationHtml = "<th>Folder</th>";

          currentView = [];
          var table_html = "";
          table_html +=
            "<table id='files' class='tablesorter'><thead><tr><th>Name</th>" +
            locationHtml +
            "<th>Size</th><th>Modified</th></tr></thead><tbody>";

          var countFiles = 0;
          var countDirs = 0;
          var sizeFiles = 0;
          var sizeDirs = 0;

          function foundItem( index ) {
            var dir_tmp = getDirNameAndPath( SearchLocationsID[ index ] );

            if ( searchThisDirOnly ) {
              var path = getPathToDir( SearchLocationsID[ index ] );

              if ( path.indexOf( currentDirID ) === -1 ) {
                // skip items not in current path
                return;
              }

              if ( path[ path.length - 1 ] === currentDirID ) {
                // file in current dir --> ok for both searchThisDirOnly and searchThisDirOnlyIncludeSubdirs
                if (
                  SearchIsDir[ index ] &&
                  SearchLocationsID[ index ] == currentDirID
                ) {
                  // always skip current dir which appears here
                  return;
                }
                console.log( "   file in current dir" );
              } else if (
                SearchIsDir[ index ] &&
                path[ path.length - 2 ] === currentDirID
              ) {
                // dir in current dir are also ok
              } else if ( path.indexOf( currentDirID ) !== -1 ) {
                // item is in a subdir: ok for searchThisDirOnlyIncludeSubdirs
                if ( !searchThisDirOnlyIncludeSubdirs ) {
                  return;
                }
              }
            }

            dir_tmp = dir_tmp.substring( sourceRoot.length );
            if ( dir_tmp != "" ) dir_tmp += "/";

            if ( SearchIsDir[ index ] === true ) {
              countDirs++;
              sizeDirs += SearchFilenames[ index ][ 1 ];
              var subdir_id = parent_folders[ SearchLocationsID[ index ] ];

              var timestamp = timestampToDate( SearchFilenames[ index ][ 2 ] );

              locationHtml = "";
              if ( showLocationColumn ) {
                var located_in = SearchLocations[ index ];
                if ( located_in === "" ) located_in = "[.]";
                located_in = located_in.substring(
                  0,
                  located_in.lastIndexOf( "\\" )
                );
                locationHtml =
                  '<td><span class=\'file_folder\'><a href="#" class="folder_link" id="' +
                  subdir_id +
                  '"> ' +
                  located_in +
                  "</a></span></td>";
              }

              table_html +=
                "<tr>" +
                '<td><span class=\'file_folder\'><a target="iframe_a" href="#" class="folder_link" id="' +
                SearchLocationsID[ index ] +
                '"> ' +
                SearchFilenames[ index ][ 3 ] +
                "</a></span></td>" +
                locationHtml +
                "<td class='size' data-sort='" +
                SearchFilenames[ index ][ 1 ] +
                "'>" +
                bytesToSize( SearchFilenames[ index ][ 1 ] ) +
                "</td>" +
                "<td class='date' data-sort='" +
                SearchFilenames[ index ][ 2 ] +
                "'>" +
                timestamp +
                "</td>" +
                "</tr>";
              currentView.push( {
                name: SearchFilenames[ index ][ 3 ],
                path: SearchLocationsRaw[ index ].replace( /\//g, "\\" ),
                type: "dir",
                size: SearchFilenames[ index ][ 1 ],
                date: SearchFilenames[ index ][ 2 ],
              } );
            } // files
            else {
              sizeFiles += SearchFilenames[ index ][ 1 ];
              countFiles++;

              var file_tmp = SearchFilenames[ index ][ 3 ];

              if ( linkFiles ) {
                var ext = file_tmp.split( "." ).pop();
                if (
                  onlyLinkExtensions.length === 0 ||
                  onlyLinkExtensions.indexOf( ext ) !== -1
                ) {
                  file_tmp =
                    linkProtocol +
                    linkRoot +
                    dir_tmp.replace( "\\", "/" ) +
                    SearchFilenames[ index ][ 3 ] +
                    '">';
                  if (
                    navigator.userAgent.toLowerCase().indexOf( "msie" ) !==
                    -1 &&
                    linkProtocol.indexOf( "file:" ) !== -1
                  ) {
                    file_tmp =
                      "javascript:alert('Internet Explorer does not allow linking to local files...')" +
                      '">';
                  }
                  if ( file_tmp.substr( 0, 1 ) === "/" )
                    file_tmp = file_tmp.substr( 1 );
                  file_tmp = file_tmp.replace( /\\/g, "/" );
                  file_tmp = file_tmp.replace( /#/g, "%23" );

                  var indx = file_tmp.indexOf( "://" );
                  if ( indx !== -1 ) {
                    var protocol_tmp = file_tmp.substr( 0, indx + 3 );
                    file_tmp = file_tmp.substr( indx + 3 );
                    file_tmp = file_tmp.replace( /\/\//g, "/" );
                    file_tmp = protocol_tmp + file_tmp;
                  } else {
                    file_tmp = file_tmp.replace( /\/\//g, "/" );
                  }

                  file_tmp =
                    '<a  target="iframe_a" href="' +
                    file_tmp +
                    SearchFilenames[ index ][ 3 ] +
                    "</a>";
                }
              }

              locationHtml = "";
              if ( showLocationColumn ) {
                var located_in = SearchLocations[ index ];
                if ( located_in === "" ) located_in = "[.]";
                locationHtml =
                  '<td><span class=\'file_folder\'><a target="iframe_a" href="#" class="folder_link" id="' +
                  SearchLocationsID[ index ] +
                  '"> ' +
                  located_in +
                  "</a></span></td>";
              }

              var timestamp = timestampToDate( SearchFilenames[ index ][ 2 ] );
              table_html +=
                "<tr>" +
                "<td><span class='file'>" +
                file_tmp +
                "</span></td>" +
                locationHtml +
                "<td class='size' data-sort='" +
                SearchFilenames[ index ][ 1 ] +
                "'>" +
                bytesToSize( SearchFilenames[ index ][ 1 ] ) +
                "</td>" +
                "<td class='date' data-sort='" +
                SearchFilenames[ index ][ 2 ] +
                "'>" +
                timestamp +
                "</td>" +
                "</tr>";

              currentView.push( {
                name: SearchFilenames[ index ][ 3 ],
                path: SearchLocationsRaw[ index ].replace( /\//g, "\\" ),
                type: "file",
                size: SearchFilenames[ index ][ 1 ],
                date: SearchFilenames[ index ][ 2 ],
              } );
            }
          }

          // search for matches
          // optimization: use indexOf if no wildcards since it's faster
          if (
            SearchFor.indexOf( "*" ) !== -1 ||
            SearchFor.indexOf( "?" ) !== -1
          ) {
            var SearchForEscaped = SearchFor.replace(
              /[\-\[\]\/\{\}\(\)\+\.\\\^\$\|]/g,
              "\\$&"
            );
            SearchForEscaped = SearchForEscaped.replace( /\*/g, ".*" );
            SearchForEscaped = SearchForEscaped.replace( /\?/g, "." );
            var regEx = new RegExp( SearchForEscaped );

            for ( c = 0; c < SearchFilenames.length; c++ ) {
              if ( regEx.test( SearchFilenames[ c ][ 0 ] ) ) {
                foundItem( c );
              }
            }
          } else {
            for ( c = 0; c < SearchFilenames.length; c++ ) {
              if ( SearchFilenames[ c ][ 0 ].indexOf( SearchFor ) !== -1 ) {
                foundItem( c );
              }
            }
          }

          table_html += "</tbody></table>";

          $( "#list_header" ).html(
            "Search Results <span class='path_divider'></span>"
          );
          document.getElementById( "list_files" ).innerHTML = table_html;
          $( "#search_indicator" ).hide();
          addFolderClickEventHandlers();

          var tablesorterHeaders = {
            1: {
              sorter: "datasort"
            },
            2: {
              sorter: "datasort"
            },
          };
          if ( showLocationColumn ) {
            tablesorterHeaders = {
              2: {
                sorter: "datasort"
              },
              3: {
                sorter: "datasort"
              },
            };
          }

          $( "#files" ).tablesorter( {
            sortInitialOrder: "desc",
            headers: tablesorterHeaders,
          } );

          var sFiles = " files";
          if ( countFiles === 1 ) sFiles = " file";
          var sDirs = " folders";
          if ( countDirs === 1 ) sDirs = " folder";
          $( "#list_footer_info_label" ).html(
            countDirs +
            sDirs +
            " (" +
            bytesToSize( sizeDirs, 0 ) +
            "), " +
            countFiles +
            sFiles +
            " (" +
            bytesToSize( sizeFiles, 0 ) +
            ")"
          );
        }, 50 ); // end setTimeout before search
      } // end doSearch()

      /* --- Show content of a folder --- */

      function ShowFolder( FolderID ) {
        var c;

        if ( SelectedFolderID === FolderID ) return false;
        $( "#treeview #" + SelectedFolderID ).removeClass( "treeview_bold" );
        SelectedFolderID = FolderID;

        $( "#search_text" ).val( "" );
        PreviousSearchFor = "";

        var path = getPathToDir( FolderID );
        var currentViewPath = getDirNameAndPath( FolderID ).replace(
          /\//g,
          "\\"
        );
        var breadcrumbs = "";
        for ( c = 0; c < path.length; c++ ) {
          var dirName = getDirName( path[ c ] );
          if ( c === 0 ) {
            dirName = dirName.replace( /\:\//g, "" ); // remove :\ from volume labels
          }
          breadcrumbs +=
            '<a target="iframe_a" href="#" class="folder_link" id="' +
            path[ c ] +
            '">' +
            dirName +
            "</a>" +
            "<span class='path_divider'></span>";
        }

        currentDir = getDirNameAndPath( FolderID );
        currentDirID = Number( FolderID );

        location.hash = "#" + currentDir;

        $( "#list_header" ).html( breadcrumbs );

        var table_html = "";
        var showParentFolderClass = "";
        if ( FolderID != 0 ) {
          showParentFolderClass = " has-parent-folder";
          table_html +=
            '<span id=\'parent_folder\' class=\'file_folder\'><a target="iframe_a" href="#" class="folder_link" id="' +
            parent_folders[ FolderID ] +
            '"> [..]</a></span>\n';
          table_html += "<div id='parent_folder_border'></div>";
        }
        table_html +=
          "<table id='files' class='tablesorter" +
          showParentFolderClass +
          "'><thead><th>Name</th><th>Size</th><th>Modified</th></tr></thead><tbody>\n";

        currentView = [];
        var countFiles = 0;
        var countDirs = 0;
        var subdirTotSizes = 0;

        // folders
        var subdirs = getSubdirs( SelectedFolderID );
        if ( subdirs != "" ) {
          for ( c = 0; c < subdirs.length; c++ ) {
            countDirs++;
            var sTmp = dirs[ subdirs[ c ] ][ 0 ].split( "*" );
            var name = sTmp[ 0 ].substring( sTmp[ 0 ].lastIndexOf( "/" ) + 1 );
            var dirSize = getDirTreeSize( subdirs[ c ] );
            subdirTotSizes += dirSize;
            var timestamp = timestampToDate( sTmp[ 2 ] );
            table_html +=
              "<tr>" +
              '<td><span class=\'file_folder\'><a target="iframe_a" href="#" class="folder_link" id="' +
              subdirs[ c ] +
              '"> ' +
              name +
              "</a></span></td>" +
              "<td class='size' data-sort='" +
              dirSize +
              "'>" +
              bytesToSize( dirSize ) +
              "</td>" +
              "<td class='date' data-sort='" +
              sTmp[ 2 ] +
              "'>" +
              timestamp +
              "</td>" +
              "</tr>\n";
            currentView.push( {
              name: name,
              path: currentViewPath,
              type: "dir",
              size: dirSize,
              date: sTmp[ 2 ],
            } );
          }
        }

        // files
        for ( c = 1; c < dirs[ SelectedFolderID ].length - 2; c++ ) {
          countFiles++;
          var sTmp = dirs[ SelectedFolderID ][ c ].split( "*" );
          var file_tmp = sTmp[ 0 ];
          var dir_tmp = getDirNameAndPath( SelectedFolderID ).substring(
            sourceRoot.length
          );
          if ( dir_tmp != "" ) dir_tmp += "/";
          if ( linkFiles ) {
            var ext = file_tmp.split( "." ).pop();
            if (
              onlyLinkExtensions.length === 0 ||
              onlyLinkExtensions.indexOf( ext ) !== -1
            ) {
              file_tmp = linkProtocol + linkRoot + dir_tmp + sTmp[ 0 ] + '">';
              if (
                navigator.userAgent.toLowerCase().indexOf( "msie" ) !== -1 &&
                linkProtocol.indexOf( "file:" ) !== -1
              ) {
                file_tmp =
                  "javascript:alert('Internet Explorer does not allow linking to local files...')" +
                  '">';
              }
              if ( file_tmp.substr( 0, 1 ) === "/" )
                file_tmp = file_tmp.substr( 1 );
              file_tmp = file_tmp.replace( /\\/g, "/" );
              file_tmp = file_tmp.replace( /#/g, "%23" );

              var indx = file_tmp.indexOf( "://" );
              if ( indx !== -1 ) {
                var protocol_tmp = file_tmp.substr( 0, indx + 3 );
                file_tmp = file_tmp.substr( indx + 3 );
                file_tmp = file_tmp.replace( /\/\//g, "/" );
                file_tmp = protocol_tmp + file_tmp;
              } else {
                file_tmp = file_tmp.replace( /\/\//g, "/" );
              }

              file_tmp =
                '<a target="iframe_a" href="' + file_tmp + sTmp[ 0 ] + "</a>";
            }
          }

          var timestamp = timestampToDate( sTmp[ 2 ] );

          table_html +=
            "<tr>" +
            "<td><span class='file'>" +
            file_tmp +
            "</span></td>" +
            "<td class='size' data-sort='" +
            sTmp[ 1 ] +
            "'>" +
            bytesToSize( sTmp[ 1 ] ) +
            "</td>" +
            "<td class='date' data-sort='" +
            sTmp[ 2 ] +
            "'>" +
            timestamp +
            "</td>" +
            "</tr>\n";
          currentView.push( {
            name: sTmp[ 0 ],
            path: currentViewPath,
            type: "file",
            size: sTmp[ 1 ],
            date: sTmp[ 2 ],
          } );
        }

        table_html += "</tbody></table>\n";

        document.getElementById( "list_files" ).innerHTML = table_html;
        addFolderClickEventHandlers();
        $( "#files" ).tablesorter( {
          sortInitialOrder: "desc",
          headers: {
            1: {
              sorter: "datasort"
            },
            2: {
              sorter: "datasort"
            },
          },
        } );

        var sFiles = " files";
        if ( countFiles === 1 ) sFiles = " file";
        var sDirs = " folders";
        if ( countDirs === 1 ) sDirs = " folder";
        $( "#list_footer_info_label" ).html(
          countDirs +
          sDirs +
          " (" +
          bytesToSize( subdirTotSizes ) +
          "), " +
          countFiles +
          sFiles +
          " (" +
          bytesToSize(
            dirs[ SelectedFolderID ][ dirs[ SelectedFolderID ].length - 2 ]
          ) +
          ")"
        );

        $( "#treeview #" + SelectedFolderID ).addClass( "treeview_bold" );

        return false;
      }

      /* --- Treeview --- */

      function PopulateTreeviewNode( node ) {
        var subdirs = getSubdirs( node.data.key );
        if ( subdirs != "" ) {
          var len = subdirs.length;
          for ( var c = 0; c < len; c++ ) {
            var newNode = node.addChild( {
              title: getDirName( subdirs[ c ] ),
              key: subdirs[ c ],
              unselectable: true,
              isFolder: true,
              tooltip: bytesToSize( getDirTreeSize( subdirs[ c ] ) ),
            } );
            PopulateTreeviewNode( newNode );
          }
        }
      }

      $( "#treeview" ).dynatree( {
        clickFolderMode: 1,
        minExpandLevel: 2,
        fx: {
          height: "toggle",
          duration: 100
        },
        onActivate: function ( node ) {
          ShowFolder( node.data.key );
        },
        onDblClick: function ( node ) {
          node.expand( !node.isExpanded() );
        },
      } );

      // init treeview items
      var rootNode = $( "#treeview" )
        .dynatree( "getRoot" )
        .addChild( {
          title: getDirName( 0 ).replace( /\//, "\\" ),
          key: "0",
          isFolder: true,
          tooltip: bytesToSize( getDirTreeSize( 0 ) ),
        } );
      rootNode.tree.enableUpdate( false );
      PopulateTreeviewNode( rootNode );
      rootNode.tree.enableUpdate( true );
      rootNode.activate();

      // browse directly to folder at startup
      if ( originalHash !== "" ) {
        var folderId = getFolderIdFromPath( originalHash );
        if ( folderId ) {
          expandToFolder( folderId );
        } else {
          location.hash = "";
        }
      }

      /* --- Export LightBox --- */

      function populateExport() {
        var output_plain = "";
        var output_json = [];
        var output_csv = "";

        // get the settings
        var showFiles = $( "#export_checkbox_files" ).prop( "checked" );
        var showDirs = $( "#export_checkbox_dirs" ).prop( "checked" );
        var fullPath = $( "#export_checkbox_path" ).prop( "checked" );

        var colPath = $( "#export_checkbox_col_path" ).prop( "checked" );
        var colType = $( "#export_checkbox_col_type" ).prop( "checked" );
        var colSize = $( "#export_checkbox_col_size" ).prop( "checked" );
        var colDate = $( "#export_checkbox_col_date" ).prop( "checked" );

        var type = $( "#export_lightbox input[type='radio']:checked" ).val();

        // set csv header
        var csv_line = '"Name"';
        if ( colPath ) csv_line += ',"Path"';
        if ( colType ) csv_line += ',"Type"';
        if ( colSize ) csv_line += ',"Size"';
        if ( colDate ) csv_line += ',"Date"';
        output_csv = csv_line + "\n";

        // collect and format items
        for ( var i = 0; i < currentView.length; i++ ) {
          var path = "";
          if ( fullPath ) path = currentView[ i ].path + "\\";

          var json_line = {
            name: path + currentView[ i ].name
          };
          if ( colPath ) json_line.path = currentView[ i ].path;
          if ( colType ) json_line.type = currentView[ i ].type;
          if ( colSize ) json_line.size = currentView[ i ].size;
          if ( colDate )
            json_line.date = timestampToIsoString( currentView[ i ].date );

          var csv_line = '"' + path + currentView[ i ].name + '"';
          if ( colPath ) csv_line += ',"' + currentView[ i ].path + '"';
          if ( colType ) csv_line += ',"' + currentView[ i ].type + '"';
          if ( colSize ) csv_line += ',"' + currentView[ i ].size + '"';
          if ( colDate )
            csv_line +=
            ',"' + timestampToIsoString( currentView[ i ].date ) + '"';

          if ( showFiles && currentView[ i ].type == "file" ) {
            output_plain += path + currentView[ i ].name + "\n";
            output_json.push( json_line );
            output_csv += csv_line + "\n";
          }
          if ( showDirs && currentView[ i ].type == "dir" ) {
            output_plain += path + currentView[ i ].name + "\n";
            output_json.push( json_line );
            output_csv += csv_line + "\n";
          }
        }

        // print items
        var output = "";
        if ( type == "plain" ) {
          output = output_plain;
        } else if ( type == "json" ) {
          output = JSON.stringify( output_json )
            .replace( /},/g, "},\n" )
            .replace( /^\[/, "[\n" )
            .replace( /\]$/, "\n]" );
        } else if ( type == "csv" ) {
          output = output_csv;
        }
        $( "#export_text" ).text( output ).focus().select();
      }

      $( "#list_footer_open_export" ).click( function () {
        var windowHeight = $( "body" ).height();
        $( "#export_checkbox_files" ).prop( "checked", true );
        $( "input[id^=export_checkbox_col]" ).attr( "disabled", true );
        $( "#export_options_columns" ).css( "opacity", "0.5" );
        populateExport();

        $( "#export_content" ).innerHeight( windowHeight - 80 );
        $( "#export_content" ).css( "top", 40 );
        $( "#export_lightbox" ).fadeIn( "fast", function () {
          $( "#export_text" ).focus().select();
        } );
      } );

      $( "#export_save" ).click( function () {
        var type = $( "#export_lightbox input[type='radio']:checked" ).val();
        if ( type == "plain" ) {
          downloadToFile(
            $( "#export_text" ).text(),
            "snap2html_export.txt",
            "text/plain;encoding:utf-8"
          );
        } else if ( type == "json" ) {
          downloadToFile(
            $( "#export_text" ).text(),
            "snap2html_export.json",
            "application/json;encoding:utf-8"
          );
        } else if ( type == "csv" ) {
          downloadToFile(
            $( "#export_text" ).text(),
            "snap2html_export.csv",
            "text/csv;encoding:utf-8"
          );
        }
      } );

      $( "#export_close" ).click( function () {
        $( "#export_lightbox" ).fadeOut( "fast" );
      } );

      $( "#export_content" ).click( function ( event ) {
        event.stopPropagation();
      } );
      $( "#export_lightbox" ).click( function () {
        $( "#export_lightbox" ).fadeOut( "fast" );
      } );
      $( "#export_lightbox input[type=radio]" ).click( function () {
        var type = $( "#export_lightbox input[type='radio']:checked" ).val();
        if ( type !== "plain" ) {
          $( "input[id^=export_checkbox_col]" ).removeAttr( "disabled" );
          $( "#export_options_columns" ).css( "opacity", 1 );
        } else {
          $( "input[id^=export_checkbox_col]" ).attr( "disabled", true );
          $( "#export_options_columns" ).css( "opacity", 0.5 );
        }
      } );
      $(
        "#export_lightbox input[type=checkbox], #export_lightbox input[type=radio]"
      ).click( function () {
        populateExport();
      } );

      document.addEventListener( "keypress", function ( keyEvent ) {
        if ( keyEvent.keyCode == 27 ) {
          // esc
          if ( $( "#csv_lightbox" ).length > 0 ) {
            $( "#csv_lightbox" ).fadeOut( "fast" );
          }
        }
      } );

      /* --- Helper Functions --- */

      function expandToFolder( id ) {
        var tree = $( "#treeview" ).dynatree( "getTree" );
        var node = tree.getNodeByKey( id.toString() );
        if ( node ) {
          node.activate();
        }
      }

      function getFolderIdFromPath( path ) {
        for ( var c = 0; c < numDirs; c++ ) {
          if ( dirs[ c ][ 0 ].split( "*" )[ 0 ] == path ) {
            return c;
          }
        }
        return null;
      }

      function getDirName( id ) {
        if ( dirs.length <= id ) return "";
        var tmp = dirs[ id ][ 0 ].split( "*" );
        var tmp2 = tmp[ 0 ].substring( tmp[ 0 ].lastIndexOf( "/" ) + 1 );
        if ( tmp2 === "" ) return tmp[ 0 ];
        else return tmp2;
      }

      function getDirNameAndPath( id ) {
        if ( dirs.length <= id ) return "";
        var tmp = dirs[ id ][ 0 ].split( "*" );
        return tmp[ 0 ];
      }

      function getSubdirs( id ) {
        if ( dirs.length <= id ) return "";
        return dirs[ id ][ dirs[ id ].length - 1 ].split( "*" );
      }

      function getPathToDir( id ) {
        var parentId = parent_folders[ id ];
        var path = [];
        if ( id != 0 ) {
          path.push( id );
        }
        while ( parentId > 0 ) {
          path.push( parentId );
          parentId = parent_folders[ parentId ];
        }
        path.push( 0 );
        return path.reverse();
      }

      function getDirSize( id ) {
        if ( dirs.length <= id ) return "0";
        return dirs[ id ][ dirs[ id ].length - 2 ];
      }

      function getDirTreeSize( id ) {
        if ( dirs.length <= id ) return "0";
        var totSize = getDirSize( id );
        var subdirs = getSubdirs( id );
        if ( subdirs != "" ) {
          var len = subdirs.length;
          for ( var c = 0; c < len; c++ ) {
            totSize += getDirTreeSize( subdirs[ c ] );
          }
        }
        return totSize;
      }

      function bytesToSize( bytes ) {
        var kilobyte = 1024;
        var megabyte = kilobyte * 1024;
        var gigabyte = megabyte * 1024;
        var terabyte = gigabyte * 1024;

        if ( bytes >= 0 && bytes < kilobyte ) {
          return bytes + " bytes";
        } else if ( bytes >= kilobyte && bytes < megabyte ) {
          return ( bytes / kilobyte ).toFixed( 0 ) + " KB";
        } else if ( bytes >= megabyte && bytes < gigabyte ) {
          return ( bytes / megabyte ).toFixed( 1 ) + " MB";
        } else if ( bytes >= gigabyte && bytes < terabyte ) {
          return ( bytes / gigabyte ).toFixed( 2 ) + " GB";
        } else if ( bytes >= terabyte ) {
          return ( bytes / terabyte ).toFixed( 2 ) + " TB";
        } else {
          return bytes + " bytes";
        }
      }

      function timestampToDate( timestamp ) {
        // Convert UNIX timestamp to local date
        // If you don't like the date format, try something else, such as toLocaleDateString() manually formatting the date here
        return new Date( timestamp * 1000 ).toLocaleString();
      }

      function timestampToIsoString( timestamp ) {
        // Convert UNIX timestamp to ISO string (for use in export view)
        return new Date( timestamp * 1000 ).toISOString();
      }

      // debounce() from Underscore.js
      // Returns a function, that, as long as it continues to be invoked, will not
      // be triggered. The function will be called after it stops being called for
      // N milliseconds. If `immediate` is passed, trigger the function on the
      // leading edge, instead of the trailing.
      function debounce( func, wait, immediate ) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          var later = function () {
            timeout = null;
            if ( !immediate ) func.apply( context, args );
          };
          var callNow = immediate && !timeout;
          clearTimeout( timeout );
          timeout = setTimeout( later, wait );
          if ( callNow ) func.apply( context, args );
        };
      }

      // Save export to local file. Based on https://stackoverflow.com/a/29304414/1087811
      function downloadToFile( content, fileName, mimeType ) {
        var a = document.createElement( "a" );
        mimeType = mimeType || "application/octet-stream";

        if ( navigator.msSaveBlob ) {
          // IE10
          navigator.msSaveBlob(
            new Blob( [ content ], {
              type: mimeType,
            } ),
            fileName
          );
        } else if ( URL && "download" in a ) {
          //html5 A[download]
          a.href = URL.createObjectURL(
            new Blob( [ content ], {
              type: mimeType,
            } )
          );
          a.setAttribute( "download", fileName );
          document.body.appendChild( a );
          a.click();
          document.body.removeChild( a );
        } else {
          location.href =
            "data:application/octet-stream," + encodeURIComponent( content ); // only this mime type is supported
        }
      }
    } ); // end $(document).ready
  </script>
  <style>
    figure {
      width: 1100px;
    }
  </style>
</head>

<body>

  <div id="wrapper" style="height: 100%; width: 40%">
    <div id="app_header" class="app_header">
      <span class="app_header_icon"></span>

      <form class="app_header_search" id="search_form" action="#">
        search: <input type="search" id="search_text" title="Search Box" />
        <div
          onclick="javascript:alert('Search Tips:\n\nUse * and ? as wildcards. * matches zero or more characters, ? matches exactly one character.\n\nPrefix your search with &gt; to search only the current folder or &gt;&gt; to search the current folder and sub folders.');"
          class="app_header_search_help">
          ?
        </div>
      </form>

      <h1>DataStructures Navigation</h1>

      <div style="color: red; font-weight: bold" class="app_header_stats">
        489 files in 10 folders (<span id="tot_size">38928138</span>)<br />~~~
        The link you click will appear in the iframe to the right ~~~
        copyright @bgoonz
      </div>
      <h6></h6>
    </div>

    <div id="loading" class="loading">
      <b>Loading...</b>
      <p class="loading_info">
        (if nothing happens, make sure javascript is enabled and allowed to
        execute, or try another browser)
      </p>
    </div>

    <div id="content" class="content">
      <div id="treeview" class="treeview"></div>

      <div id="list_container" class="list_container">
        <div id="search_indicator" class="search_indicator">Searching...</div>
        <div id="list_header" class="list_header"></div>
        <div id="list_files" class="list_files"></div>
        <div id="list_footer" class="list_footer">
          <div id="list_footer_open_export" class="list_footer_open_export">
            Export this List
          </div>
          <span id="list_footer_info_label"></span>
        </div>
      </div>
    </div>
  </div>

  <div id="export_lightbox" class="export_lightbox">
    <div id="export_content" class="export_content">
      <div class="export_options">
        <a target="iframe_a" href="#" id="export_close" class="export_close"><b>×</b> Close</a>
        <span>Show:</span>
        <input type="checkbox" id="export_checkbox_files" /><label for="export_checkbox_files">Files</label>
        <input type="checkbox" id="export_checkbox_dirs" /><label for="export_checkbox_dirs">Folders</label>
        <input type="checkbox" id="export_checkbox_path" /><label for="export_checkbox_path">Full path</label>
      </div>
      <div class="export_options">
        <input type="radio" name="export_options" value="plain" id="export_checkbox_plain" checked /><label
          for="export_checkbox_plain">Plain</label>
        <input type="radio" name="export_options" value="json" id="export_checkbox_json" /><label
          for="export_checkbox_json">JSON</label>
        <input type="radio" name="export_options" value="csv" id="export_checkbox_csv" /><label
          for="export_checkbox_csv">CSV</label>
        <span id="export_options_columns">
          <span>Columns:</span>
          <input type="checkbox" id="export_checkbox_col_path" /><label for="export_checkbox_col_path">Path</label>
          <input type="checkbox" id="export_checkbox_col_type" /><label for="export_checkbox_col_type">Type</label>
          <input type="checkbox" id="export_checkbox_col_size" /><label for="export_checkbox_col_size">Size</label>
          <input type="checkbox" id="export_checkbox_col_date" /><label for="export_checkbox_col_date">Date</label>
        </span>
      </div>
      <textarea id="export_text" class="export_text" wrap="off"></textarea>
      <div class="export_save">
        <i class="export_chevron"></i>&nbsp;<a href="#" id="export_save">Save</a>
      </div>
    </div>
    <div id="export_tip">
      Tip: Search for * to export all files and folders
    </div>
  </div>
  <!-- <br>
  <br>
  <hr>
  <hr>
  <br>
  <br> -->
  <!-- 
  <iframe class="scroll-pane jspVerticalBar" src="https://bgoonz-blog.netlify.app/" name="iframe_a" height="100%"
    width="60%" style="
        text-align: center;
        border: 6px solid white;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        zoom:1.5;
      " title="iframe_a" frameborder="0"></iframe> -->

  <iframe class="scroll-pane jspVerticalBar" src="https://bgoonz-blog.netlify.app/" name="iframe_a" height="100%"
    width="100%" style="
          text-align: center;
          border: 6px solid white;
          background-color: white;
          margin-left: auto;
          margin-right: auto;
          zoom:1.5;
        " title="iframe_a" frameborder="0"></iframe>

  </div>
</body>

</html>
