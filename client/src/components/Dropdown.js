import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import "../style.css";


const SeasonsDropdown = ({ handleSeason }) => (
 
    <Dropdown text='Seasons' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Seasons</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='2021'>
            <Dropdown.Menu>
              <Dropdown.Item seasonvalue="Q1 2021" onClick={handleSeason}>Q1</Dropdown.Item>
              <Dropdown.Item seasonvalue="Q2 2021" onClick={handleSeason}>Q2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2020'>
            <Dropdown.Menu>
              <Dropdown.Item seasonvalue="Q1 2020" onClick={handleSeason}>Q1</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2019'>
            <Dropdown.Menu>
              <Dropdown.Item seasonvalue="Q1 2019" onClick={handleSeason}>Q1</Dropdown.Item>
              <Dropdown.Item seasonvalue="Q2 2019" onClick={handleSeason}>Q2</Dropdown.Item>
              <Dropdown.Item seasonvalue="Q3 2019" onClick={handleSeason}>Q3</Dropdown.Item>
              <Dropdown.Item seasonvalue="Q4 2019" onClick={handleSeason}>Q4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2018'>
            <Dropdown.Menu>
              <Dropdown.Item seasonvalue="Q4 2018" onClick={handleSeason}>Q4</Dropdown.Item>
              <Dropdown.Item seasonvalue="Q3 2018" onClick={handleSeason}>Q3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown text='2015'>
            <Dropdown.Menu>
              <Dropdown.Item seasonvalue="2015" onClick={handleSeason}>Full Year</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item seasonvalue="All Time" onClick={handleSeason}>ALL TIME</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

)

export default SeasonsDropdown;