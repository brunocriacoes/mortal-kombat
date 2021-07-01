function vibrate() {
    if (!window) {
        return;
    }
    if (!window.navigator) {
        return;
    }
    if (!window.navigator.vibrate) {
        return;
    }
    window.navigator.vibrate([100,200,100,200,100,200,100,200,100,100,100,100,100,200,100,200,100,200,100,200,100,100,100,100,100,200,100,200,100,200,100,200,100,100,100,100,100,100,100,100,100,100,50,50,100,800]);
}
