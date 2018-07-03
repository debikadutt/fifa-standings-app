import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import PropTypes from 'prop-types';
import GroupTable from '../containers/GroupTable';
import '../styles/bootstrap.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentPage: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // event handler for pagination
    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        const pageNumbers = [];
        for (let i = 1; i <= this.props.data.length; i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <span className="px-2"
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </span>
            );
        });
           
        return this.props.data.length ? (
            <div className="px-4">
                <GroupTable 
                tabledata = {this.props.data[this.state.currentPage-1]}
                />
                <nav className="my-4 pt-2 justify-content-center align-items-center d-flex">
                    <ul className="pagination">
                        {renderPageNumbers.map((page, index) =>
                        (<li key={index} className="page-item page-link">{page}</li>)
                        )}
                    </ul>
                </nav>
            </div>
        ) : <span>{this.props.isLoading}</span>;
    }
}

App.propTypes = {
    fetchData: PropTypes.func.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(itemsFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);