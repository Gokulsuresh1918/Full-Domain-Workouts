function a() {
    try {
        b(3)
        b('k')
    } catch (error) {
        console.log('error');
    }
}
function b(n) {
    if (typeof n !== 'number') {
        throw new Error('need num')//throw a new error or propogation an error
    }
    console.log('valid');
}