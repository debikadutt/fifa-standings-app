import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/app.css'
import logo from '../images/FIFA_World_Cup.png';

class GroupTable extends Component {
  render() {
    return (
        <div className="card card-cascade narrower mt-5">
            <div className="gradient-card-header narrower py-4 d-flex justify-content-center align-items-center">
                <img src={logo} className="app-logo" alt=""/>
                <h4 className="white-text font-weight-bold text-uppercase">Fifa World Cup 2018</h4>
            </div>
            <h5 className="d-flex font-weight-bold justify-content-center align-items-center">{this.props.tabledata.name}</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="row">#</th>
                        <th className="th-lg">Team Name</th>
                        <th className="th-lg">Played</th>
                        <th className="th-lg">Won</th>
                        <th className="th-lg">Drawn</th>
                        <th className="th-lg">Lost</th>
                        <th className="th-lg">Points</th>
                    </tr>
                </thead>
                {this.props.tabledata.standings.map((teamData, index) => (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{teamData.team.name}</td>
                            <td>{teamData.played}</td>
                            <td>{teamData.won}</td>
                            <td>{teamData.drawn}</td>
                            <td>{teamData.lost}</td>
                            <td>{teamData.pts}</td>
                        </tr>
                    </tbody>         
                ))}
            </table>
        </div>
    );
  }
}

export default GroupTable;
