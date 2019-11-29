import React from 'react';

const ResponseBlock = props => {
    // console.log(Object.entries(props.data));
    // let propMap = new Map(Object.entries(props.data));
    // console.log(propMap.entries());

    let propMap = Object.entries(props.data);

    // for (let i = 0; i < propMap.length; i++) {
    //     const element = propMap[i];
    //     if(typeof element[1] === typeof ""){
    //         element[1] = element[1].split(", ");
    //     }
    //     if(typeof element[1] === typeof []){
    //         for (let el = 0; el < element[1].length; el++) {
    //             const subElement = element[1][el];
    //             console.log("Sub element found", subElement, typeof subElement );
    //         }
    //     }
    //  return <p>{element[0]}  {element[1]}</p>
    // }

    return(
        <div>
            <h3>Response Block</h3>

            {propMap.length ? (
                <div>
                    {
                        propMap.map(entry => {
                                const element = entry
 
                                if(typeof element[1] === typeof []){
                                    for (let el = 0; el < element[1].length; el++) {
                                        const subElement = element[1][el];
                                        element[1] = subElement;
                                        console.log("Sub element found", subElement, typeof subElement );
                                    }
                                }
                                if(typeof element[1] === typeof {}){
                                    element[1] = Object.entries(element[1]);
                                    console.log("changed element", element[1])
                                    for (let elo = 0; elo < element[1].length; elo++) {
                                        const subObjElement = element[1][elo];
                                        console.log("Inner element found", subObjElement, typeof subObjElement );
                                        for (let inEl = 0; inEl < subObjElement.length; inEl++) {
                                            const innerElement = subObjElement[inEl];
                                            element[1] = innerElement;
                                        }
                                    }
                                }
                             console.log(element[0], element[1])
                             return <p key={element[0]}>{element[0]}  {element[1]}</p>
                        })
                    }
                </div>
            ) : (<p></p>)}
        </div>
    )

}

const styles = {

};

export default ResponseBlock;