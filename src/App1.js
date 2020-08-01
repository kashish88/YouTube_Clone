import React, { Component } from 'react';


import {Grid} from '@material-ui/core'

import App2 from './App2.css';
import {SearchBar,VideoDetail,VideoList} from './components';

 


import youtube from './api/youtube'

class App1 extends React.Component {

   state={
       videos:[],
       selectedVideo:null,
   }


   onVideoSelect=(video)=>{
     this.setState({selectedVideo:video})
   }

    handleSubmit=  async (searchTerm)=>{
const response=await youtube.get('search',{
params:{
    part:'snippet',
   maxResults:5,
  key:'AIzaSyBukeqZEugQa3B4fX8ntNDFsEjho8Y9iwE',
  q:searchTerm,
     }
    });

this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});

    }


    render(){

      const {selectedVideo,videos}=this.state;

        return (
           <Grid justify="center"  container spacing={10}>
           <Grid item xs={12}>
           <Grid container spacing={10}>
           <Grid item xs={12}>
           <SearchBar
           onFormSubmit={this.handleSubmit}
           />
           </Grid>
           <Grid item xs={8}>
           <VideoDetail video={this.state.selectedVideo}  />
           </Grid>
           <Grid item xs={4}>
           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
           </Grid>
           </Grid>
           </Grid>
           
           </Grid>
        )
    }
}

export default App1;