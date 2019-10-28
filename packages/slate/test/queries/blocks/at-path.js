/** @jsx h */

import { h } from '../../helpers'

export const input = (
  <value>
    <block>one</block>
    <block>two</block>
    <block>three</block>
  </value>
)

export const run = editor => {
  return Array.from(editor.blocks({ from: [1] }))
}

export const output = [[<block>two</block>, [1]], [<block>three</block>, [2]]]