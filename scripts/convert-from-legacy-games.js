// @ts-check

const fs = require('fs')
const path = require('path')
const minimist = require('minimist')
const shortid = require('shortid')
// import {StoreState, Task, TaskState} from '../src/app/types'

/**
 * @typedef {import('../src/app/types').StoreState} StoreState
 */
/**
 * @typedef {import('../src/app/types').TaskState} TaskState
 */
/**
 * @typedef {import('../src/app/types').Session} Session
 */

/**
 * @typedef {{
  state: 'active'|'finished'|'dropped'|'hold'|'wish',
  title: string,
  id: string,
  sessions: {start: number, stop: number}[]
}} Game
 */

/**
 * @param {Game[]} games
 * @returns {StoreState['tasks']}
 */
const gamesToTasks = (games) => {
  const tasks = Object.fromEntries(games.map(game => {
    const id = shortid()
    return [
      id,
      {
        id,
        name: game.title,
         /** @type {any} */
        state: ({
          active: 'active',
          finished: 'done',
          dropped: 'dropped',
          hold: 'on-hold',
          wish: 'to-do'
        })[game.state],
        sessions: game.sessions.map(/** @returns {Session} */ s => ({
          id: shortid(),
          start: s.start,
          end: s.stop
        }))
      }
    ]
  }))
  return {
    ids: Object.keys(tasks),
    values: tasks
  }
}

const { games, tasks } = minimist(process.argv.slice(2))
const tasksObject = gamesToTasks(JSON.parse(fs.readFileSync(path.resolve(games), 'utf8')))

fs.writeFileSync(path.resolve(tasks), JSON.stringify(tasksObject, null, '  '))

console.log(`Converted ${tasksObject.ids.length} games to tasks.`)
