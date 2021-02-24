import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const SeasonsDropdown = () => (
 
    <Dropdown text='Seasons' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Seasons</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='2021'>
            <Dropdown.Menu>
              <Dropdown.Item>Q1</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2020'>
            <Dropdown.Menu>
              <Dropdown.Item>Q1</Dropdown.Item>
              <Dropdown.Item>Q2</Dropdown.Item>
              <Dropdown.Item>Q3</Dropdown.Item>
              <Dropdown.Item>Q4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2019'>
            <Dropdown.Menu>
              <Dropdown.Item>Q1</Dropdown.Item>
              <Dropdown.Item>Q2</Dropdown.Item>
              <Dropdown.Item>Q3</Dropdown.Item>
              <Dropdown.Item>Q4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2018'>
            <Dropdown.Menu>
              <Dropdown.Item>Q3</Dropdown.Item>
              <Dropdown.Item>Q4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

)

export default SeasonsDropdown;