import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

function ActiveTask(props) {
  const { taskTitle, taskText, taskDate } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://192.168.103.10:4000/api/tasks/gettask');
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>{data.length > 0 ? data[0].taskTitle : taskTitle}</Text>
      <Text>{data.length > 0 ? data[0].taskText : taskText}</Text>
      <Text style={{ fontStyle: 'italic' }}>Deadline: {data.length > 0 ? formatDate(data[0].taskDate) : taskDate}</Text>
      <Text style={{ color: 'red' }}>{data.length > 0 ? data[0].taskText : taskText}</Text>
    </View>
  );
}

export default ActiveTask;