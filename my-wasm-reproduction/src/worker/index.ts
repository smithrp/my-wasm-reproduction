import './wasm_exec';

import { PWBWorker } from 'promise-worker-bi';

let regexWasm;

async function setup(data: string){
    if( !WebAssembly.instantiateStreaming){
        //pollyfill
        WebAssembly.instantiateStreaming = async (resp, importObject)=>{
            const source = await (await resp).arrayBuffer();
            return await WebAssembly.instantiate(source, importObject);
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let go = new Go();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let obj = await WebAssembly.instantiateStreaming(fetch(data), go.importObject);
    regexWasm = obj.instance;
    go.run(regexWasm);
}

let promiseWorker = new PWBWorker();
let isSetup = false;

promiseWorker.register(async function([{pattern, s, data}]){
    if(!isSetup){
        await setup(data);
        isSetup = true;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return matchString(pattern,s);
})

export default setup;