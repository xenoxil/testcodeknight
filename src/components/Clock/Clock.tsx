import { useEffect, useLayoutEffect, useState } from 'react';

const Clock = (props: any) => {
  const currentApproximateTime = new Date();
  const [hours, setHours] = useState<number>(currentApproximateTime.getHours());
  const [minutes, setMinutes] = useState<number>(currentApproximateTime.getMinutes());
  const [seconds, setSeconds] = useState<number>(currentApproximateTime.getSeconds());
  const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  useLayoutEffect(() => {
    getCurrentTime();
    let timer = setInterval(updateTime, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function updateTime() {
    setSeconds((seconds) => {
      if (seconds === 59) {
        setMinutes((minutes) => {
          if (minutes === 59) {
            setHours((hours) => {
              if (hours === 23) {
                return 0;
              }
              return ++hours;
            });
            return 0;
          }
          return ++minutes;
        });
        return 0;
      }
      return ++seconds;
    });
  }

  const getCurrentTime = async () => {
    fetch('https://api.api-ninjas.com/v1/worldtime?city=Moscow', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'ZI9YIQssKRtgallMVgf82g==2p1131XqtienHG7m',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
      .then((res) => {
        setHours(Number(res.hour));
        setMinutes(Number(res.minute));
        setSeconds(Number(res.second));
      })
      .catch((err) => {
        console.log('Ошибка ', err);
      });
  };

  return (
    <div className="clock">
      {numbers.map((number) => {
        return (
          <div
            className="clock__number"
            style={{ transform: `rotate(${30 * number}deg)` }}
            key={number}>
            <div style={{ transform: `rotate(-${30 * number}deg)` }}>{number}</div>
          </div>
        );
      })}
      <div
        className="clock__arrow clock__arrow_hour"
        style={{
          transform: `translateX(-49%) translateY(0) rotate(${
            270 + (((seconds / 60 + minutes) / 60 + hours) / 12) * 360
          }deg)`,
        }}
      />
      <div
        className="clock__arrow clock__arrow_minute"
        style={{
          transform: `translateX(-49%) translateY(0) rotate(${
            270 + ((seconds / 60 + minutes) / 60) * 360
          }deg)`,
        }}
      />
      <div
        className="clock__arrow clock__arrow_second"
        style={{
          transform: `translateX(-49%) translateY(0) rotate(${270 + (seconds / 60) * 360}deg)`,
        }}
      />
      <div className="clock__center" />
    </div>
  );
};

export default Clock;
