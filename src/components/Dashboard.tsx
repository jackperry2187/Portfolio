import React, { useEffect, useState } from 'react';

export const Dashboard = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  let [timeRan, setTimeRan] = useState<number>(0);
  let [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    let interval: undefined | NodeJS.Timer = undefined;
    if(isActive) {
      interval = setInterval(() => {
        setTimeRan(timeRan => timeRan + 1);
      }, 150);
    }
    else clearInterval(interval);

    return () => clearInterval(interval);
  }, [isActive, timeRan]);

  useEffect(() => {
    if(timeRan >= 7) setIsActive(false);
    if(timeRan <= 7) setFirstName('Jackson'.substring(0, timeRan) + (timeRan < 7 ? '_' : ''));
    if(timeRan <= 5) setLastName('Perry'.substring(0, timeRan) + (timeRan < 5 ? '_' : ''));
  }, [timeRan]);
  
  return (
    <main className="px-3 position-absolute top-50 start-50 translate-middle w-100">
        <div className="row">
            <div className="col-6 my-auto">
                <h1 className="display-1">{firstName} {lastName}</h1>
                <h4 className="text-secondary">5th Semester Student of Stevens Institute of Technology</h4>
            </div>
            <div className="col-6 my-auto">
                <img src="/images/profile_1.png" className="image-fluid img-thumbnail rounded w-50" alt="profile_picture" />
            </div>
        </div>
    </main>
  )
}
