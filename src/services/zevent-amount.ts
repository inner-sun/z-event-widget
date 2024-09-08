import { ZEventResponse } from '~/types/api'

const url = `https://corsproxy.io/?${encodeURI('https://zevent.fr/api/')}`

const getZeventAmount = (streamerId: string) => async () => {
  const query = await fetch(url)
  const result: ZEventResponse = await query.json()
  const streamer = result.live.find(streamer => streamer.twitch === streamerId)
  const amount = Math.round(streamer?.donationGoal.donationAmount.number ?? 0)
  return amount
}

export {
  getZeventAmount
}