import React, { Component } from "react"

class OwnerList extends Component {

  render() {
    return (
      <section className="owners list">
        <h2>Owners</h2>
        {
          this.props.owners.map(owner =>
            <div key={owner.id}>
             <section className="ownerName">
               {owner.name}
               </section> 
              <section className="ownerNumber">
              Contact info: {owner.phone}
              </section>
            </div>
          )
        }

      </section>
    )
  }
}

export default OwnerList