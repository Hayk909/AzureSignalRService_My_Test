import dayjs from 'dayjs';

export interface Message {
  user: string
  text: string
  timestamp: string | dayjs.Dayjs;
}

export interface ChatMessage extends Message {
  id: string
  avatar: string
  isMine?: boolean
}
