import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts, colors } from '../../../utils';
import IsMe from './IsMe';
import Other from './Other';


export default function ChatItem({isMe}) {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
}

