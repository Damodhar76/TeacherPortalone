import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainerNav from "./Trainernav";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Retrieve user ID from local storage
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:9090/api/notifications/user/${userId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <p>Loading notifications...</p>;
  }

  if (notifications.length === 0) {
    return <p>No notifications found for this user.</p>;
  }

  return (
    <div>
      <TrainerNav/>
      <h3 className="text-center text-danger mt-3"><i>Notifications</i></h3>
      <div>
        {notifications.map(notification => (
          <div key={notification.id} style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '7px', marginTop:'15px',fontFamily:'sans-serif', marginLeft:'35px', marginRight:'35px' }}>   
          {notification.message}</div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
