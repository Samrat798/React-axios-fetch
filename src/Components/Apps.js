import React from 'react';

class Apps extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users').then((res) => {
      res.json().then((result) => {
        console.log(result.data);
        this.setState({ users: result.data });
      });
    });
  }
  render() {
    return (
      <>
        <h1>Fetch Api DATA</h1>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div key={i}>
                <p>
                  {i}--- {item.first_name} {item.last_name}{' '}
                  <span>(Email:-- {item.email})</span>
                </p>
              </div>
            ))
          : null}
      </>
    );
  }
}

export default Apps;
