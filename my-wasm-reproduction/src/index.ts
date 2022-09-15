import {PWBHost} from 'promise-worker-bi';

export default async function createWorker(){
    const url = new URL('./worker/index', import.meta.url);
    const resp = await fetch(url.href);
    const blob = await resp.blob();
    const worker = new Worker(window.URL.createObjectURL(blob), {type: 'module'});

    const promiseWorker = new PWBHost(worker);

    const wasmUrl = new URL('./worker/regex.wasm', import.meta.url);
    await promiseWorker.postMessage([{data: wasmUrl.href}]);

    return promiseWorker;
}