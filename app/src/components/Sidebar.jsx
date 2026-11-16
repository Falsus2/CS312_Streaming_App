import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap"

function Sidebar(){

    return (
        <div className="col-auto bg-dark sideBarDiv">
            <h2>Filters</h2>
            <h3>Genres</h3>
            <ul>
                <li>Western</li>
                <li>Action</li>
                <li>Comedy</li>
                <li>Romance</li>
                <li>Mystery</li>
            </ul>
            <h3>Actors</h3>
            <ul>
                <li>Scarlett Johansen</li>
                <li>Tom Holland</li>
                <li>Dwayne Johnson</li>
                <li>Jenna Ortega</li>
            </ul> <br />
            <h3>A-Z</h3> <br />
            <h3>Z-A</h3>
        </div>
  )
}

export default Sidebar;