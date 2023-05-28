class EventHandler {

    constructor({map, event}) {
        this.map = map;
        this.event = event;
    }

    IDLE(resolve) {
        
    }

    WALK(resolve) {
        const who = this.map.sprites[this.event.who];
        who.startBehavior({
            map: this.map
        }, {
            status: Status.WALK,
            direction: this.event.direction
        });
        const handler = e => {
            if(e.detail.whoId === this.event.who) {
                document.removeEventListener(Person.WALKING_COMPLETED_EVENT, handler);
            }
        };
        document.addEventListener(Person.WALKING_COMPLETED_EVENT, handler);
    }

    init() {
        return new Promise(resolve => {
            this[this.event.status](resolve)
        });
    }
}