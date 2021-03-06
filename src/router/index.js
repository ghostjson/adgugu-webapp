import { createRouter, createWebHistory } from 'vue-router'
import Client from "../views/Client/Client";
import Home from "../views/Client/Home";
import Promoter from "../views/Promoter/Promoter";
import Advertiser from "../views/Advertiser/Advertiser";

const routes = [
  {
    path: '/',
    name: 'Client',
    component: Client,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/contact',
        component: () => import('../views/Client/Contact')
      },
      {
        path: '/register/:type?',
        name: 'register',
        component: () => import('../views/Client/Register')
      },
      {
        path: '/login',
        component: () => import('../views/Client/Login')
      },
      {
        path: '/advertiser-form',
        component: () => import('../views/Client/AdvertiserForm')
      },
      {
        path: '/promoter-form',
        component: () => import('../views/Client/PromoterForm')
      }
    ]
  },
  {
    path: '/promoter',
    name: 'Promoter',
    component: Promoter
  },
  {
    path: '/advertiser',
    name: 'Advertiser',
    component: Advertiser,
    children: [
      {
        path: '',
        component: () => import('../views/Advertiser/Dashboard')
      },
      {
        path: 'ad-campaigns',
        name: 'AdCampaigns',
        component: () => import('../views/Advertiser/Campaigns')
      },
      {
        path: 'ad-campaigns/edit/:id',
        component: () => import('../views/Advertiser/CampaignEdit')
      },
      {
        path: 'ad-campaigns/new/non-video',
        name: 'newNonVideoAd',
        component: () => import('../views/Advertiser/CreateCampaign/NonVideoAd'),
        props: true
      },
      {
        path: 'ad-campaigns/new/video',
        name: 'newVideoAd',
        component: () => import('../views/Advertiser/CreateCampaign/VideoAd'),
        props: true
      },
      {
        path: 'ad-campaigns/new/offline',
        name: 'newOfflineAd',
        component: () => import('../views/Advertiser/CreateCampaign/OfflineAd'),
        props: true
      },
      {
        path: 'ad-campaigns/budget/',
        name: 'Budget',
        component: () => import('../views/Advertiser/CreateCampaign/Budget')
      },
      {
        path: 'ad-campaigns/promoters-list',
        name: 'PromotersList',
        component: () => import('../views/Advertiser/CreateCampaign/PromotersList')
      },
      {
        path: 'ad-campaigns/campaign-completed',
        name: 'PromotersComplete',
        component: () => import('../views/Advertiser/CreateCampaign/FinishCampaign')
      },
      {
        path: 'ad-campaigns/:id',
        component: () => import('../views/Advertiser/CampaignView')
      }
    ]
  },
  {
    path: '/promoter',
    name: 'Promoter',
    component: Promoter,
    children: [
      {
        path: '',
        name: 'PromoterDashboard',
        component: () => import('../views/Promoter/Dashboard')
      },
      {
        path: 'offer-list',
        name: 'PromoterOfferList',
        component: () => import('../views/Promoter/PromoterOfferList')
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
