import React, { Component } from 'react'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/share'
// import { fromEvent } from 'rxjs/Observable/fromEvnet'


var observable = Observable.create(observer => {
  try {
    observer.next('hey gus!')
    observer.next('Hello')
    setInterval(() => {
      observer.next('I am good')
    }, 2000)
    // observer.complete()
  } catch (err) {
    observer.error(err)
  }
}).share()

//

var observer = observable.subscribe(
  x => console.log(x),
  err => console.log('err', err),
  () => console.log('ok')
)

// observer.add(observer2)

setTimeout(() => {
  // observer.unsubscribe()
  var observer2 = observable.subscribe(x => console.log('subscribe 2', x))
}, 1000)

export default class Hello extends Component {
  render() {
    return <div>Hello</div>
  }
}
