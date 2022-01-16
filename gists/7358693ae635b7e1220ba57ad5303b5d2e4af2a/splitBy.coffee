# str: The string we wish to split up
# length: how many characters of 'str' should each array element contain
# padWith: what to padd the last element with
splitBy = (str, length, padWith) ->
  pad = (str) ->
    str = "#{str}#{padWith}" for i in [str.length...length]
    str    
  pad (str.slice i, i+length), length, padWith for i in [0...str.length] by length
    

str = 'abcdefgdlkhjatbhjsdfhjkadskjh'

console.log splitBy str, 4, '_'
