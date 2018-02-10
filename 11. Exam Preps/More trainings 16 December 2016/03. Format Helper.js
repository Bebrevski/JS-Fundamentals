function solve([text]) {
    console.log(text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));

}

solve([`Pisio e   mnogo gotin pi4 000// öfigujsif   : (ni moa   sa "OPAA   ".  Kude mi e   glavata ot 03.  12.  2016 !?Drusa  kivcheci  , a pisio
me gleda  :"   ko praish be mome???      " . ajde opraai sq...   ?
`]);

solve(['Now lets test.all         ; the     3.14     : functionality! What about trimming "  Trim me please       "!']);