import React from 'react';

import Timer from '../components/Timer/Timer';
import TimerHeader from '../components/Timer/TimerHeader';
import TimerForm from '../components/Timer/TimerForm';

class RelaxTimer extends React.Component {
   state = {
      minutes: 5,
      seconds: 0,
      percentage: 0,
   };

   changeTimeFromHeader = (minutes, seconds) => {
      this.setState({ minutes, seconds });
   };

   startRelaxTime = () => {
      this.myInterval = setInterval(() => {
         const { seconds, minutes } = this.state;
         if (seconds > 0) {
            this.player.play();
            this.setState(({ seconds }) => ({
               seconds: seconds - 1,
            }));
         }
         if (seconds === 0) {
            if (minutes === 0) {
               clearInterval(this.myInterval);
            } else {
               this.player.play();
               this.setState(({ minutes }) => ({
                  minutes: minutes - 1,
                  seconds: 59,
               }));
            }
         }
      }, 1000);
      this.loaderInerval = setInterval(() => {
         if (this.state.percentage < 100) {
            this.setState(({ percentage }) => ({
               percentage: percentage + 1,
            }));
         } else {
            this.player.pause();
         }
      }, ((this.state.minutes * 60 + Math.floor(this.state.seconds)) / 100) * 1000);
   };

   stopRelaxTime = () => {
      clearInterval(this.myInterval);
      clearInterval(this.loaderInerval);
      this.player.pause();
   };

   resetTime = () => {
      this.stopRelaxTime();
      this.setState({ minutes: 5, seconds: 0, percentage: 0 });
      this.player.pause();
      this.player.currentTime = 0;
   };

   componentWillUnmount() {
      clearInterval(this.myInterval);
      clearInterval(this.loaderInerval);
      this.player.pause();
      this.player.currentTime = 0;
   }

   render() {
      return (
         <div style={{ marginBottom: '4rem' }}>
            <TimerHeader />
            <TimerForm
               onFormSubmit={this.changeTimeFromHeader}
               minutes={this.state.minutes}
               seconds={this.state.seconds}
            />
            <Timer
               percentage={this.state.percentage}
               minutes={this.state.minutes}
               seconds={this.state.seconds}
            />
            <div className='ui labeled icon buttons' style={{ marginTop: '3rem' }}>
               <div onClick={() => this.startRelaxTime()} className='ui basic green button'>
                  <i className='play icon'></i>
                  Inizia!
               </div>

               <div onClick={() => this.stopRelaxTime()} className='ui basic red button'>
                  <i className='pause icon'></i>
                  Ferma
               </div>
               <div onClick={() => this.resetTime()} className='ui basic orange button'>
                  <i className='shuffle icon'></i>
                  Reset
               </div>
            </div>
            <audio
               src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3'
               ref={ref => (this.player = ref)}
            />
         </div>
      );
   }
}

export default RelaxTimer;
