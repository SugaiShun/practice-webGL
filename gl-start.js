main();

function main(){
    const canvas=document.getElementById("glcanvas");
    const gl=canvas.getContext("webgl");

    if(gl==null){
        alert("Unable to initialize webgl.")
        return;
    }

    gl.clearColor(1.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
