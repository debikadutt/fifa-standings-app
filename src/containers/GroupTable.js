import React, { Component } from 'react';
import '../styles/bootstrap.css';

class GroupTable extends Component {
  render() {
    return (
        <div className="card card-cascade narrower mt-5">
            <div className="gradient-card-header narrower py-4 d-flex justify-content-center align-items-center">

<h4 className="white-text font-weight-bold text-uppercase">World Cup Fifa 2018</h4>

</div>
            <div className="d-flex font-weight-bold justify-content-center align-items-center">{this.props.tabledata.name}</div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="row">#</th>
                        <th className="th-lg">Team Name</th>
                        <th className="th-lg">Position</th>
                        <th className="th-lg">Played</th>
                        <th className="th-lg">Won</th>
                        <th className="th-lg">Points</th>
                    </tr>
                </thead>
                {this.props.tabledata.standings.map((teamData, index) => (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{teamData.team.name}</td>
                            <td>{teamData.pos}</td>
                            <td>{teamData.played}</td>
                            <td>{teamData.won}</td>
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
