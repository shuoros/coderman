class EventHandler {

    constructor({map, event}) {
        this.map = map;
        this.event = event;
    }

    MESSAGE(resolve) {
        const message = new TextMessage({
            text: this.event.text,
            onComplete: () => resolve()
        });
        message.init(document.querySelector(".game-container"));
    }

    IDLE(resolve) {
        const who = this.map.sprites[this.event.who];
        who.startBehavior({
            map: this.map
        }, {
            status: Status.IDLE,
            direction: this.event.direction,
            time: this.event.time
        });
        const handler = e => {
            if(e.detail.whoId === this.event.who) {
                document.removeEventListener(Person.IDLE_COMPLETED_EVENT, handler);
                resolve();
            }
        };
        document.addEventListener(Person.IDLE_COMPLETED_EVENT, handler);
    }

    WALK(resolve) {
        const who = this.map.sprites[this.event.who];
        who.startBehavior({
            map: this.map
        }, {
            status: Status.WALK,
            direction: this.event.direction,
            retry: true
        });
        const handler = e => {
            if(e.detail.whoId === this.event.who) {
                document.removeEventListener(Person.WALKING_COMPLETED_EVENT, handler);
                resolve();
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