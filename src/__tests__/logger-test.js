import { log } from '../index'
import uuidv4 from 'uuid/v4'

function sleep(seconds) {
  return new Promise((resolve, reject) => setTimeout(resolve, seconds * 1000))
}

describe('Logger', () => {
  
  let testObject = {}
  
  beforeAll(async () => {
    testObject = {"username": "john@doe.com"}
  })

  describe('log some events', () => {

    it('logs an info event', async () => {
      log(testObject, 'just some info', 'info')
    })

    it('logs a warning event', async () => {
      log(testObject, 'a warning', 'warn')

    })

    it('logs an error event', async () => {
      log(testObject, 'an error occurred', 'error')
    })

    it('waits for n seconds then prints test results', async () => {
      await sleep(3)
    })
  })

})