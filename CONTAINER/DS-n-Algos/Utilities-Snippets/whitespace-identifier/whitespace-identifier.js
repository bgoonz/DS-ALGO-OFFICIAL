

    nonasciiwhitespaces = [
        0x1680,
        0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A,
        0x202F, 0x205F,
        0x3000,
        0xFEFF
    ];

    function identify(curChar) {
        return curChar === 0x20 || curChar === 0x09 || curChar === 0x0B || curChar === 0x0C || curChar === 0xA0 ||
            curChar >= 0x1680 && nonasciiwhitespaces.indexOf(curChar) >= 0;
    }
