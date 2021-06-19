/**
 * Version 1.0
 */

import React from 'react';
import { KNT, kntCase } from './knt';



 const optionList = function(data = []){
        return data.map(([x, v], y) => (
            <option key={y} name={x} value={v}>{v}</option>
        ));
    }
    
const pList = function(x, y, type){
    return <p key={y} value={x}>{x}</p>
}

const EmptyText = (props) => {
    return (
        <div>
        {
            (props.data !== "" || props.data !== null || props.data !== undefined)?
            props.children
            :
            ""
        }
        </div>
    )
}


/**
 * Version 1.01
 */
export const KntReact = {
        image: function(base64 = "", className =""){
            return <img src={base64}  className={className} alt=""/>
        }
}


/**
 * Version 1.2
 */
 export const KNTReact = {
    image: function(base64 = "", className =""){
        return <img src={base64}  className={className} alt=""/>
    },
    makeSelect: {
        /**
         * 
         * @param {array list} data 
         * List of Options To be Selected
         * @param {String} name 
         * Field name. (if passing with id attribute? use this format {name: "fieldName", id: "fieldId"} )
         * @param {event} onChange 
         * returns event pass OnChange Function 
         * @param {String} className 
         * Styling Class Name
         * @returns  <select> <option> text </option> </select>
         */ 
        select: function(data= [], name, onChange, className, keys={value: "", view: ""}){
            
            var id = "";
            if (typeof name === 'object' && name !== null){
               name = name.name;
               id = name.id? name.id: "";  
            }

            // let data = []

            const handleChange = (e) => {onChange(e);}
             
            var res = (
                <select name={name} id={id} onChange={handleChange} className={className}>
                        <option value="">--select--</option>
                        {
                            data.map((x, i) => (
                            x[keys.value] && x[keys.view] ?
                            <option key={i} value={x[keys.value]}>{x[keys.view]}</option>
                            :
                            x.input?
                            <option key={i} value={x.value}>{x.name} <input name={name}  className="" type="number" min="1" placeholder={x.name} /></option>
                            :
                            x.name || x.value?
                            <option key={i} value={x.value}>{x.name}</option>
                            : 
                            <option key={i} value={KNT.string.toLowerCase(x)}>{x}</option>
                            ))
                        }
                </select>
            )
            return res;
        },
        /**
         * 
         * @param {array list} data 
         * List of Options To be Selected
         * @param {String} name 
         * Field name. (if passing with id attribute? use this format {name: "fieldName", id: "fieldId"} )
         * @param {*} label 
         * First Td Text
         * @param {event} onChange 
         * returns event pass OnChange Function 
         * @param {String} className 
         * Styling Class Name
         * @returns   <select> <option> text </option> </select>
         */    
        trTdSelect: function(data= [], name, label, onChange, className){
            var id = "";
            if (typeof name === 'object' && name !== null){
               name = name.name;
               id = name.id;  
            }
            var state = {
                value: "",
            }

            const handleChange = (e) => {
                state.value = e.target.value
                onChange(e)
                console.log("here", state.value)
            };
            var res = (
                <tr className={className}>
                    <td>{KNT.string.filterCamelCase(label," ", kntCase.titleCase)}</td>
                    <td>
                        <select tag="s" id={id} name={name} onChange={handleChange}>
                                        <option value="">--select--</option>
                                {data.map((x, i) => (
                                    x.input?
                                <option key={i} value={x.value}>{x.name} <input name={name}  className="" type="number" min="1" placeholder={x.name} /></option>
                                :
                                x.name || x.value?
                                <option key={i} value={x.value}>{x.name}</option>
                                : 
                                <option key={i} value={KNT.string.toLowerCase(x)}>{x}</option>
                                ))}
                        </select>
                    </td>
                </tr>
            )
            return res;
        },
    }
}




const makePages = {
    page: function(contents, className ="", id="", styles = {}){
        let view = null;
        view = (
            <div styles={{...style}} className={className? className: ''} id={id? id: ''} value={value? value: ''} >
                {contents? contents: null}
            </div>
        )
        return view
    },
    /**
     * 
     * @param {view any} itemOne 
     * @param {view two any} itemTwo 
     * @param {className} attributor
     * its accept and array of attribute, segmented as object i.e [{}, {}, {}]  for each obj key ascendingly means 0 as first key className, 1 as second key id, 2 as third styles.... 
     * 
     * @returns 
     */
    dualPage: function(contents = [itemOne, itemTwo], attributor = [{}]){
        // let tmp = ;
        let newTemp = [];
        for(var i = 0; i <= contents.length; i++){
            const process = this.page(itemOne[i], KNT.array.getKeys(attributeFo[i])[0]? KNT.array.getKeys(attributeFo[i])[0]:"", KNT.array.getKeys(attributeFo[i])[1]? KNT.array.getKeys(attributeFo[i])[1]:"", KNT.array.getKeys(attributeFo[i])[2]? KNT.array.getKeys(attributeFo[i])[2]:{});
            if(!newTemp.includes(process)){
                newTemp.push(process);
            }
        }
        let view = null;
        view = (
            <div>
                {...newTemp}
            </div>
        )

        return view;
    }
}
