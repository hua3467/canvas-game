class GameObject {
    id = Date.now();
    constructor(name = "New Object", x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    };
    setName(newName) {
        this.name = newName;
    }
}

// export default gameObject;