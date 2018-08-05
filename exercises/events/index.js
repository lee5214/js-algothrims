// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].map(callback => callback());
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    //IMPORTANT de-structure with variable requires a valid name
    const { [eventName]: validName, ...rest } = this.events;
    this.events = { ...rest };
    //delete this.events[eventName]
  }
}

module.exports = Events;
