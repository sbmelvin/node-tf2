// This file contains representations of message IDs

module.exports = {
	// EGCItemMsg
	Base: 1000,
	SetSingleItemPosition: 1001,
	Craft: 1002,
	CraftResponse: 1003,
	Delete: 1004,
	VerifyCacheSubscription: 1005,
	NameItem: 1006,
	UnlockCrate: 1007,
	UnlockCrateResponse: 1008,
	PaintItem: 1009,
	PaintItemResponse: 1010,
	GoldenWrenchBroadcast: 1011,
	MOTDRequest: 1012,
	MOTDRequestResponse: 1013,
	NameBaseItem: 1019,
	NameBaseItemResponse: 1020,
	RemoveSocketItem_DEPRECATED: 1021,
	RemoveSocketItemResponse_DEPRECATED: 1022,
	CustomizeItemTexture: 1023,
	CustomizeItemTextureResponse: 1024,
	UseItemRequest: 1025,
	UseItemResponse: 1026,
	RespawnPostLoadoutChange: 1029,
	RemoveItemName: 1030,
	RemoveItemPaint: 1031,
	GiftWrapItem: 1032,
	GiftWrapItemResponse: 1033,
	DeliverGift: 1034,
	DeliverGiftResponseReceiver: 1036,
	UnwrapGiftRequest: 1037,
	UnwrapGiftResponse: 1038,
	SetItemStyle: 1039,
	UsedClaimCodeItem: 1040,
	SortItems: 1041,
	RevolvingLootList_DEPRECATED: 1042,
	LookupAccount: 1043,
	LookupAccountResponse: 1044,
	LookupAccountName: 1045,
	LookupAccountNameResponse: 1046,
	UpdateItemSchema: 1049,
	RequestInventoryRefresh: 1050,
	RemoveCustomTexture: 1051,
	RemoveCustomTextureResponse: 1052,
	RemoveMakersMark: 1053,
	RemoveMakersMarkResponse: 1054,
	RemoveUniqueCraftIndex: 1055,
	RemoveUniqueCraftIndexResponse: 1056,
	SaxxyBroadcast: 1057,
	BackpackSortFinished: 1058,
	AdjustItemEquippedState: 1059,
	CollectItem: 1061,
	ItemAcknowledged: 1062,
	Presets_SelectPresetForClass: 1063,
	Presets_SetItemPosition: 1064,
	ReportAbuse: 1065,
	ReportAbuseResponse: 1066,
	Presets_SelectPresetForClassReply: 1067,
	NameItemNotification: 1068,
	ClientDisplayNotification: 1069,
	ApplyStrangePart: 1070,
	IncrementKillCountAttribute: 1071,
	IncrementKillCountResponse: 1072,
	RemoveStrangePart: 1073,
	ResetStrangeScores: 1074,
	GiftedItems: 1075,
	ApplyUpgradeCard: 1077,
	RemoveUpgradeCard: 1078,
	ApplyStrangeRestriction: 1079,
	ClientRequestMarketData: 1080,
	ClientRequestMarketDataResponse: 1081,
	ApplyXifier: 1082,
	ApplyXifierResponse: 1083,
	TrackUniquePlayerPairEvent: 1084,
	FulfillDynamicRecipeComponent: 1085,
	FulfillDynamicRecipeComponentResponse: 1086,
	SetItemEffectVerticalOffset: 1087,
	SetHatEffectUseHeadOrigin: 1088,
	ItemEaterRecharger: 1089,
	ItemEaterRechargerResponse: 1090,
	ApplyBaseItemXifier: 1091,
	ApplyClassTransmogrifier: 1092,
	ApplyHalloweenSpellbookPage: 1093,
	RemoveKillStreak: 1094,
	RemoveKillStreakResponse: 1095,
	TFSpecificItemBroadcast: 1096,
	IncrementKillCountAttribute_Multiple: 1097,
	DeliverGiftResponseGiver: 1098,
	SetItemPositions: 1100,
	LookupMultipleAccountNames: 1101,
	LookupMultipleAccountNamesResponse: 1102,
	TradingBase: 1500,
	Trading_InitiateTradeRequest: 1501,
	Trading_InitiateTradeResponse: 1502,
	Trading_StartSession: 1503,
	Trading_SessionClosed: 1509,
	Trading_CancelSession: 1510,
	Trading_InitiateTradeRequestResponse: 1514,
	ServerBrowser_FavoriteServer: 1601,
	ServerBrowser_BlacklistServer: 1602,
	ServerRentalsBase: 1700,
	ItemPreviewCheckStatus: 1701,
	ItemPreviewStatusResponse: 1702,
	ItemPreviewRequest: 1703,
	ItemPreviewRequestResponse: 1704,
	ItemPreviewExpire: 1705,
	ItemPreviewExpireNotification: 1706,
	ItemPreviewItemBoughtNotification: 1708,
	Dev_NewItemRequest: 2001,
	Dev_NewItemRequestResponse: 2002,
	Dev_DebugRollLootRequest: 2003,
	StoreGetUserData: 2500,
	StoreGetUserDataResponse: 2501,
	StorePurchaseInit_DEPRECATED: 2502,
	StorePurchaseInitResponse_DEPRECATED: 2503,
	StorePurchaseFinalize: 2512,
	StorePurchaseFinalizeResponse: 2513,
	StorePurchaseCancel: 2514,
	StorePurchaseCancelResponse: 2515,
	StorePurchaseQueryTxn: 2508,
	StorePurchaseQueryTxnResponse: 2509,
	StorePurchaseInit: 2510,
	StorePurchaseInitResponse: 2511,
	ToGCDirtySDOCache: 2516,
	ToGCDirtyMultipleSDOCache: 2517,
	ToGCUpdateSQLKeyValue: 2518,
	ToGCBroadcastConsoleCommand: 2521,
	ServerVersionUpdated: 2522,
	ApplyAutograph: 2523,
	ToGCWebAPIAccountChanged: 2524,
	RequestAnnouncements: 2525,
	RequestAnnouncementsResponse: 2526,
	RequestPassportItemGrant: 2527,
	ClientVersionUpdated: 2528,
	ItemPurgatory_FinalizePurchase: 2531,
	ItemPurgatory_FinalizePurchaseResponse: 2532,
	ItemPurgatory_RefundPurchase: 2533,
	ItemPurgatory_RefundPurchaseResponse: 2534,
	ToGCPlayerStrangeCountAdjustments: 2535,
	RequestStoreSalesData: 2536,
	RequestStoreSalesDataResponse: 2537,
	RequestStoreSalesDataUpToDateResponse: 2538,
	ToGCPingRequest: 2539,
	ToGCPingResponse: 2540,
	ToGCGetUserSessionServer: 2541,
	ToGCGetUserSessionServerResponse: 2542,
	ToGCGetUserServerMembers: 2543,
	ToGCGetUserServerMembersResponse: 2544,
	ToGCGrantSelfMadeItemToAccount: 2555,
	ToGCThankedByNewUser: 2556,
	ShuffleCrateContents: 2557,
	
	// EGCBaseClientMsg
	PingRequest: 3001,
	PingResponse: 3002,
	ClientWelcome: 4004,
	ServerWelcome: 4005,
	ClientHello: 4006,
	ServerHello: 4007,
	ClientGoodbye: 4008,
	ServerGoodbye: 4009,
	
	// ETFGCMsg
	ReportWarKill: 5001,
	VoteKickBanPlayer: 5018,
	VoteKickBanPlayerResult: 5019,
	KickPlayer_DEPRECATED: 5020,
	StartedTraining_DEPRECATED: 5021,
	FreeTrial_ChooseMostHelpfulFriend: 5022,
	RequestTF2Friends: 5023,
	RequestTF2FriendsResponse: 5024,
	Replay_SubmitContestEntry: 5026,
	Replay_SubmitContestEntryResponse: 5027,
	Saxxy_Awarded: 5029,
	FreeTrial_ThankedBySomeone: 5028,
	FreeTrial_ThankedSomeone: 5030,
	FreeTrial_ConvertedToPremium: 5031,
	MeetThePyroSilliness_BananaCraft_DEPRECATED: 5032,
	MVMARG_HighFiveSuccessResponse_DEPRECATED: 5033,
	MVMARG_HighFiveOnClient_DEPRECATED: 5034,
	Coaching_AddToCoaches: 5200,
	Coaching_AddToCoachesResponse: 5201,
	Coaching_RemoveFromCoaches: 5202,
	Coaching_RemoveFromCoachesResponse: 5203,
	Coaching_FindCoach: 5204,
	Coaching_FindCoachResponse: 5205,
	Coaching_AskCoach: 5206,
	Coaching_AskCoachResponse: 5207,
	Coaching_CoachJoinGame: 5208,
	Coaching_CoachJoining: 5209,
	Coaching_CoachJoined: 5210,
	Coaching_LikeCurrentCoach: 5211,
	Coaching_RemoveCurrentCoach: 5212,
	Coaching_AlreadyRatedCoach: 5213,
	Duel_Request: 5500,
	Duel_Response: 5501,
	Duel_Results: 5502,
	Duel_Status: 5503,
	Halloween_ReservedItem_DEPRECATED: 5600,
	Halloween_GrantItem_DEPRECATED: 5601,
	Halloween_GrantItemResponse_DEPRECATED: 5604,
	Halloween_Cheat_QueryResponse_DEPRECATED: 5605,
	Halloween_ItemClaimed_DEPRECATED: 5606,
	Halloween_ReservedItem: 5607,
	Halloween_GrantItem: 5608,
	Halloween_GrantItemResponse: 5609,
	Halloween_Cheat_QueryResponse_DEPRECATED_2: 5610,
	Halloween_ItemClaimed_DEPRECATED_2: 5611,
	Halloween_ServerBossEvent: 5612,
	Halloween_Merasmus2012: 5613,
	Halloween_UpdateMerasmusLootLevel: 5614,
	GameServer_LevelInfo: 5700,
	GameServer_AuthChallenge: 5701,
	GameServer_AuthChallengeResponse: 5702,
	GameServer_CreateIdentity: 5703,
	GameServer_CreateIdentityResponse: 5704,
	GameServer_List: 5705,
	GameServer_ListResponse: 5706,
	GameServer_AuthResult: 5707,
	GameServer_ResetIdentity: 5708,
	GameServer_ResetIdentityResponse: 5709,
	Client_UseServerModificationItem: 5710,
	Client_UseServerModificationItem_Response: 5711,
	GameServer_UseServerModificationItem: 5712,
	GameServer_UseServerModificationItem_Response: 5713,
	GameServer_ServerModificationItemExpired: 5714,
	GameServer_ModificationItemState: 5715,
	GameServer_AckPolicy: 5716,
	GameServer_AckPolicyResponse: 5717,
	QP_ScoreServers: 5800,
	QP_ScoreServersResponse: 5801,
	QP_PlayerJoining: 5802,
	PickupItemEligibility_Query_DEPRECATED: 6000,
	PickupItemEligibility_Query_DEPRECATED_2: 6001,
	IncrementKillCountAttribute_DEPRECATED: 6100,
	IncrementKillCountResponse_DEPRECATED: 6101,
	GameMatchSignOut: 6204,
	CreateOrUpdateParty: 6233,
	AbandonCurrentGame: 6235,
	k_EMsgForceSOCacheResend: 6237,
	RequestChatChannelList: 6260,
	RequestChatChannelListResponse: 6261,
	ReadyUp: 6270,
	KickedFromMatchmakingQueue: 6271,
	LeaverDetected: 6272,
	LeaverDetectedResponse: 6287,
	PlayerFailedToConnect: 6288,
	ExitMatchmaking: 6289,
	AcceptInvite: 6291,
	AcceptInviteResponse: 6292,
	MatchmakingProgress: 6293,
	MvMVictoryInfo: 6294,
	GameServerMatchmakingStatus: 6295,
	CreateOrUpdatePartyReply: 6296,
	MvMVictory: 6297,
	MvMVictoryReply: 6298,
	GameServerKickingLobby: 6299,
	LeaveGameAndPrepareToJoinParty: 6300,
	RemovePlayerFromLobby: 6301,
	SetLobbySafeToLeave: 6302,
	UpdatePeriodicEvent: 6400,
	ClientVerificationChallenge: 6500,
	ClientVerificationChallengeResponse: 6501,
	ClientVerificationVerboseResponse: 6502,
	ClientSetItemSlotAttribute: 6503,
	PlayerSkillRating_Adjustment: 6504,
	Dev_GrantWarKill: 10001
};