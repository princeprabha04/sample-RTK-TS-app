import '../../src/App.css';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'

import React from "react";
import {getPosts} from '../store/postSlice'
import { useEffect } from "react";
import userList from "./user.json";

interface RootState {
    posts: {
      entries: any[];
      loading: boolean;
    };
    // Add more slices of state here...
  }

function Table() {
    const dispatch = useDispatch()
    const {entries, loading} = useSelector((state:RootState)=>state.posts)
    console.log("entries",  typeof entries )

    useEffect(()=>{
        dispatch(getPosts() as any)
    },[])

  return (
    <div style={{width:'250% !important'}}>
      <table>
        <thead >
          <tr >
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        {entries?.map((item) => {
          return (
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
