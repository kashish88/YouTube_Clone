import React from 'react';
 import {Paper,TextField} from '@material-ui/core'
 import MenuIcon from '@material-ui/icons/Menu';
 import SearchIcon from '@material-ui/icons/Search';
 import YouTubeIcon from '@material-ui/icons/YouTube';

class SearchBar extends React.Component {

    state={
        searchTerm:''
    }

    handleChange=(event)=>{
       // console.log(event.target.value)
        this.setState({searchTerm:event.target.value})
    }
     

    handleSubmit=(event)=>{
        const{searchTerm}=this.state;
        const{onFormSubmit}=this.props;

       // console.log(searchTerm)

       onFormSubmit(searchTerm);

       event.preventDefault();


    }



    render() {
        return(
          <div>
          <MenuIcon style={{width:40,height:40,color:'white'}} />
         
          <YouTubeIcon style={{color:'red',marginLeft:20,width:40,height:40}} />
         
          <p style={{marginTop:-40,fontSize:30,color:'white',marginLeft:110}}>YouTube</p>
         
           <Paper elevation={6} style={{padding:'15px',width:900,marginLeft:300}}>
           <form onSubmit={this.handleSubmit}>
           <SearchIcon />
          
           <TextField style={{ marginLeft:50,marginTop:-50,width:850}}fullWidth label="Search..." onChange={this.handleChange}></TextField>
           </form>
           </Paper>
           
           </div>
        )
    }
}


export default SearchBar;