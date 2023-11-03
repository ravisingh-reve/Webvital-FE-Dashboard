import React, { useState } from 'react'
import '../scss/custom.scss'

import { AppContent, AppHeader } from '../components/index'

const DefaultLayout = () => {
  let mockData = {
    sucess: true,
    currentData: [
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '19-10-2023 12:29AM',
          webVitalData: {
            Performance: 80,
            Accessibility: 90,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.5,

            LargestContentfulPaint: 1.5,

            FirstMeaningfulPaint: 0.5,

            TotalBlockingTime: 0.25,

            SpeedIndex: 1.4,
          },
        },
        _id: '653038ac5dd757718b9c6c39',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '20-10-2023 12:29AM',
          webVitalData: {
            Performance: 90,
            Accessibility: 90,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '653038b75dd757718b9c6c3b',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '21-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 90,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '653039f5b9bffd996b78c302',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '22-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 90,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '653039fab9bffd996b78c304',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '23-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '65303b37b9bffd996b78c31b',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '24-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '6530c40fad5bec57a30b08b5',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '25-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '6530c412ad5bec57a30b08b7',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '26-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '6530c414ad5bec57a30b08b9',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '27-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '6530c415ad5bec57a30b08bb',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '28-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '6530c417ad5bec57a30b08bd',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '29-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '6530c418ad5bec57a30b08bf',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '30-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '6530c419ad5bec57a30b08c1',
        __v: 0,
      },
      {
        msite: {
          url: 'www.tatacliq.com',
          time: '31-10-2023 12:29AM',
          webVitalData: {
            Performance: 100,
            Accessibility: 190,
            BestPractices: 75,

            SEO: 89,

            PWA: 100,
            FirstContentfulPaint: 0.6,

            LargestContentfulPaint: 1,

            FirstMeaningfulPaint: 0.7,

            TotalBlockingTime: 0.6,

            SpeedIndex: 1.2,
          },
        },
        _id: '6530c41bad5bec57a30b08c3',
        __v: 0,
      },
    ],
    totalPages: 2,
  }
  const webvitalsArray = [
    { name: 'Performance' },
    { name: 'Accessibility' },
    { name: 'Best Practices' },
    { name: 'SEO' },
    { name: 'PWA' },
    // { name: ' First Contentful Paint', link: '' },
    // { name: 'Largest Contentful Paint', link: '' },
    // { name: ' First Meaningful Paint', link: '' },
    // { name: 'Speed Index', link: '' },
    // { name: 'Total Blocking Time', link: '' },
  ]
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      {/* <AppSidebar
        webvitalsArray={webvitalsArray}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      /> */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader
          webvitalsArray={webvitalsArray}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div
          className="body flex-grow-1 px-3"
          style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <AppContent
            data={mockData}
            webvitalsArray={webvitalsArray}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
