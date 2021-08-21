class UiEvent {
    constructor(target, type, callback, targetObj) {
        window.addEventListener(type, e => {
            if (e.x >= target.x - (target.radius / 2) && e.x <= target.x + (target.radius / 2) && e.x >= target.y - (target.radius / 2) && e.y <= target.y + (target.radius / 2)) {
                callback(targetObj);
            }
        });
    }
}