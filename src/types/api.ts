export interface ViewersCount {
  number: number
  formatted: string
}

export interface DonationAmount {
  number: number
  formatted: string
}

export interface DonationGoal {
  goals: any[]
  donationAmount: DonationAmount
}

export interface Live {
  twitch_id: string
  display: string
  twitch: string
  profileUrl: string
  online: boolean
  game: string
  location: string
  viewersAmount: ViewersCount
  streamlabsId?: string
  donationUrl: string
  donationGoal: DonationGoal
}

export interface ZEventResponse {
  live: Live[]
  globalDonationUrl: string
  donationAmount: DonationAmount
  viewersCount: ViewersCount
  calendar: any[]
  marquee: any
  widgetVersionId: number
  eventSourceDisabled: boolean
  websiteMode: string
}