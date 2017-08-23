import React from 'react'
import {connect} from 'cerebral/react'
import {state, signal} from 'cerebral/tags'
import { Divider, IconButton, Checkbox } from 'material-ui'
import CertCard from '../CertCard'
import ClientPanel from '../ClientPanel'
import YearPanel from '../YearPanel'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import styles from './styles.css'

export default connect({
  mode: state`app.view.main_panel.mode`,
  client: state`client_panel.selected_client`,
  clients: state`client_panel.clients`,
  certifications: state`app.view.certifications`,

  initialize: signal`app.initialize`,
  addCertButtonClicked: signal`app.addCertButtonClicked`,
  deleteAuditsButtonClicked: signal`app.deleteAuditsButtonClicked`,
},

class App extends React.Component {

  componentWillMount() {
    this.props.initialize({})
  }

  render() {

    let years = {}
    let certs = null
    if (this.props.client) {
      certs = Object.keys(this.props.certifications).map((key, i) => {
        return <CertCard name={key} key={'cert-'+i}/>
      })
    }

    return (
      <div className='app'>
        <div 
          style={{}}
          className='header'>
          <div className='header-left'>
            <h1>ABC Audits</h1>
            <IconButton
              iconClassName="material-icons">store
            </IconButton>
            Audits done right!
          </div>
          <div
            className='header-right'>
            <div
              className='profile-container'>
              Audrey Auditor 
              <IconButton
                iconClassName="material-icons">account_circle
              </IconButton>
            </div>
            {false ? <div className='modes'>
              <p 
                className={this.props.mode === 'connections' ? 'highlighted-mode' : 'mode'}
                onClick={()=>{this.props.modeClicked({mode: 'connections'})}}>
                <u>Connections</u>
              </p>
              <p 
                className={this.props.mode === 'certifications' ? 'highlighted-mode' : 'mode'}
                onClick={()=>{this.props.modeClicked({mode: 'certifications'})}}>
                <u>Certifications</u>
              </p>
            </div> : null}
          </div>
        </div>
        <div className='lower'>
          <div className='left-panel'>
            <ClientPanel className='left-panel' />
          </div>
          <div className='main-panel'>
            <div className='main-panel-header'>
              <p className={'main-panel-header-text'}>Current Certifications</p>
              <IconButton
                disabled={!Object.keys(this.props.certifications).some((key) => {return this.props.certifications[key].selected})}
                className='main-panel-delete-button'
                onTouchTap={() => {this.props.deleteAuditsButtonClicked({})}}
                iconClassName="material-icons">delete
              </IconButton>
              <IconButton
                disabled={true}
                className='main-panel-share-button'
                iconClassName="material-icons">group
              </IconButton>
            </div>
            <hr />
            {certs}
            {this.props.client ? <div
              onClick={()=> this.props.addCertButtonClicked({})}
              className='main-panel-add-cert'>
              <IconButton
                iconClassName="material-icons">add_circle
              </IconButton> 
              <p>New Certification</p>
            </div> 
            : null }
          </div>
        </div>
      </div>
    )
  }
})
