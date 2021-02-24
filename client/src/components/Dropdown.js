import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const SeasonsDropdown = ({ handleSeason }) => (
 
    <Dropdown text='Seasons' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Seasons</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='2021'>
            <Dropdown.Menu>
              <Dropdown.Item seasonValue="Q1 2021" onClick={handleSeason}>Q1</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2020'>
            <Dropdown.Menu>
              <Dropdown.Item seasonValue="Q1 2020" onClick={handleSeason}>Q1</Dropdown.Item>
              <Dropdown.Item seasonValue="Q2 2020" onClick={handleSeason}>Q2</Dropdown.Item>
              <Dropdown.Item seasonValue="Q3 2020" onClick={handleSeason}>Q3</Dropdown.Item>
              <Dropdown.Item seasonValue="Q4 2020" onClick={handleSeason}>Q4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2019'>
            <Dropdown.Menu>
              <Dropdown.Item seasonValue="Q1 2019" onClick={handleSeason}>Q1</Dropdown.Item>
              <Dropdown.Item seasonValue="Q2 2019" onClick={handleSeason}>Q2</Dropdown.Item>
              <Dropdown.Item seasonValue="Q3 2019" onClick={handleSeason}>Q3</Dropdown.Item>
              <Dropdown.Item seasonValue="Q4 2019" onClick={handleSeason}>Q4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2018'>
            <Dropdown.Menu>
              <Dropdown.Item seasonValue="Q3 2018" onClick={handleSeason}>Q3</Dropdown.Item>
              <Dropdown.Item seasonValue="Q4 2018" onClick={handleSeason}>Q4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

)

export default SeasonsDropdown;