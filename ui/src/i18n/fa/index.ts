import type { Translation } from '../i18n-types';

const fa: Translation = {
  abandoned: 'Abandoned',
  actionComments: 'Action Comments',
  actionItem: 'Action Item',
  actionItemPlaceholder: 'Action item...',
  actionItems: 'Action Items',
  actionPhaseDescription:
    'Add action items, you can no longer group or vote comments',
  actions: 'Actions',
  activate: 'Activate',
  active: 'Active',
  activeRetros: 'Active Retros',
  activeRetroUsers: 'Active Retro Users',
  activeStoryboards: 'Active Storyboards',
  activeStoryboardUsers: 'Active Storyboard Users',
  addComment: 'Add Comment',
  addPersona: 'Add Persona',
  admin: 'Admin',
  adminCleanOldRetros: 'Clean Retros older than {daysOld} days',
  adminCleanOldStoryboards: 'Clean Storyboards older than {daysOld} days',
  adminPageAdmin: 'Admin',
  adminPageAlerts: 'Alerts',
  adminPageApi: 'API Keys',
  adminPageOrganizations: 'Organizations',
  adminPageTeams: 'Teams',
  adminPageUsers: 'Users',
  alertAllowDismiss: 'Allow Dismiss',
  alertContent: 'Alert Content',
  alertContentPlaceholder: 'Enter alert content',
  alertCreate: 'Create Alert',
  alertDelete: 'Delete Alert',
  alertDeleteConfirmation: 'Are you sure you want to delete this alert?',
  alertNamePlaceholder: 'Enter an alert name',
  alertRegisteredOnly: 'Registered Only',
  alerts: 'Alerts',
  alertSave: 'Save Alert',
  alertTypePlaceholder: 'Select an alert type',
  allVotesIn: 'All votes in',
  apiDocumentation: 'API Documentation',
  apikeyCopyFailure: "Couldn't copy API key to clipboard",
  apikeyCopySuccess: 'API key copied to clipboard',
  apiKeys: 'API Keys',
  applicationStatsError: 'Error getting application stats',
  appName: 'Thunderdome',
  appPreviewAlt: 'Preview of Thunderdome, Agile Planning Poker UI Experience',
  appSubtitle: 'Open Source Agile Planning Poker app',
  appVersion: 'Version {version}',
  associateTeam: 'Associate Team',
  authError:
    '{friendly|{false:Error encountered attempting to authenticate warrior, true:Error encountered attempting to authenticate user}}',
  autoFinishVoting: 'Auto Finish Voting',
  avatarAltText: 'Placeholder Avatar',
  back: 'Back',
  battleAbandon: '{friendly|{false:Abandon Battle, true:Abandon Game}}',
  battleCreate: '{friendly|{false:Create Battle, true:Create Game}}',
  battleDelete: '{friendly|{false:Delete Battle, true:Delete Game}}',
  battleEdit: '{friendly|{false:Edit Battle, true:Edit Game}}',
  battleEditPointsDisabled: 'Voting is active, cannot modify allowed points.',
  battleJoin: '{friendly|{false:Join Battle, true:Join Game}}',
  battleName: '{friendly|{false:Battle Name, true:Game Name}}',
  battleRemoveError:
    '{friendly|{false:Error attempting to remove battle., true:Error attempting to remove game.}}',
  battleRemoveSuccess:
    '{friendly|{false:Battle removed successfully., true:Game removed successfully.}}',
  battles: '{friendly|{false:Battles, true:Games}}',
  battlesActive: '{friendly|{false:Active Battles, true:Active Games}}',
  battlesActiveUsers:
    '{friendly|{false:Active Battle Users, true:Active Story Users}}',
  becomeFacilitator: 'Become Facilitator',
  becomeLeader: 'Become Leader',
  becomeParticipant: 'Become Participant',
  becomeSpectator: 'Become Spectator',
  blocked: 'Blocked',
  blockers: 'Blockers',
  blockersPlaceholder: "I'm blocked by...",
  brainstorm: 'Brainstorm',
  brainstormPhaseDescription: 'Add your comments below',
  brainstormPhaseFeedbackVisibility: 'Brainstorm Phase Feedback Visibility',
  brainstormVisibilityLabelConcealed: 'Feedback Concealed',
  brainstormVisibilityLabelHidden: 'Feedback Hidden',
  brainstormVisibilityLabelVisible: 'Feedback Visible',
  cancel: 'Cancel',
  cannotBeUndone: 'This cannot be undone.',
  checkIn: 'Check In',
  checkinCommentDeleteError: 'Error deleting check in comment',
  checkinCommentError: 'Error commenting on check in',
  checkinError: 'Error checking in',
  checkinMeetYesterdayGoalsQuestion: "Did you meet yesterday's goals?",
  checkins: 'Checkins',
  colorLegend: 'Color Legend',
  colorLegendNotSpecified: 'legend not specified',
  comment: 'Comment',
  comments: 'Comments',
  completed: 'Completed',
  conciseVotingResults: 'Concise Voting Results',
  confirmDeleteRetro: 'Are you sure you want to delete this retrospective?',
  createAccount: 'Create Account',
  createAlertError: 'Error encountered creating alert',
  createAlertSuccess: 'Alert created successfully',
  createARetro: 'Create a Retro',
  createAStoryboard: 'Create a Storyboard',
  createBattleError:
    '{friendly|{false:Error encountered creating battle, true:Error encountered creating game}}',
  createOrgError: 'Error attempting to create organization',
  createRetro: 'Create Retro',
  createRetroErrorMessage: 'Error encountered creating retro',
  createStoryboard: 'Create Storyboard',
  createUserError: 'Error encountered creating user',
  customizableBattleOptions:
    '{friendly|{false:Customizable Battle Options, true:Customizable Game Options}}',
  dateCreated: 'Created Date',
  dateUpdated: 'Updated Date',
  delete: 'Delete',
  deleteActionItemError: 'Error deleting action item',
  deleteActionItemSuccess: 'Action item deleted successfully',
  deleteAlertError: 'Error attempting to delete alert',
  deleteAlertSuccess: 'Alert deleted successfully',
  deleteBattle: '{friendly|{false:Delete Battle, true:Delete Game}}',
  deleteBattleConfirmText:
    '{friendly|{false:Are you sure you want to delete this battle?, true:Are you sure you want to delete this game?}}',
  deleteBattleError:
    '{friendly|{false:error deleting battle, true:error deleting game}}',
  deleteCheckinError: 'Error deleting check in',
  deleteDepartment: 'Delete Department',
  deleteDepartmentConfirmText:
    'Are you sure you want to delete this department?',
  deleteOrganization: 'Delete Organization',
  deleteOrganizationConfirmText:
    'Are you sure you want to delete this organization?',
  deleteRetro: 'Delete Retro',
  deleteRetroErrorMessage: 'error deleting retro',
  deleteStoryboard: 'Delete Storyboard',
  deleteStoryboardErrorMessage: 'error deleting storyboard',
  deleteTeam: 'Delete Team',
  deleteTeamConfirmText: 'Are you sure you want to delete this team?',
  deleteUserError: 'Error encountered deleting user',
  demote: 'Demote',
  demoteUserError: 'Error encountered demoting user',
  department: 'Department',
  departmentCreate: 'Create Department',
  departmentCreateError: 'Error attempting to create department',
  departmentDeleteError: 'Error attempting to delete department',
  departmentDeleteSuccess: 'Department deleted successfully.',
  departmentGetError: 'Error getting department',
  departmentName: 'Department Name',
  departmentNamePlaceholder: 'Enter an department name',
  departments: 'Departments',
  departmentSave: 'Save Department',
  departmentTeamsGetError: 'Error getting department teams',
  departmentUsersGetError: 'Error getting department users',
  discuss: 'Discuss',
  discussPlaceholder: 'I would like to discuss...',
  done: 'Done',
  duplicateRetroSession: 'Duplicate retro session exists for your ID',
  duplicateStoryboardSession: 'Duplicate storyboard session exists for your ID',
  edit: 'Edit',
  editColorLegend: 'Edit Legend',
  editRetro: 'Edit Retro',
  editStoryboard: 'Edit Storyboard',
  email: 'Email',
  enterPasscode: 'Enter passcode...',
  enterYourEmail: 'Enter your email',
  execute: 'Execute',
  export: 'Export',
  facilitator: 'Facilitator',
  facilitatorCode: 'Facilitator Code',
  facilitatorCodeOptional: 'Facilitator Code (Optional)',
  facilitatorCodePlaceholder: 'Enter an optional facilitator code',
  finalPoints: 'Final Points',
  flag: 'Flag',
  footerAuthoredBy:
    'is designed and developed by {authorOpen}Steven Weathers{authorClose}.',
  footerLicense:
    'The source code is licensed {licenseOpen}Apache 2.0{licenseClose}.',
  forgotPassword: 'Forgot Password',
  getAlertsError: 'Error getting alerts',
  getApikeysError: 'Error getting apikeys',
  getBattleError:
    '{friendly|{false:Error getting battle, true:Error getting game}}',
  getBattlesError:
    '{friendly|{false:Error getting battles, true:Error getting games}}',
  getCheckinsError: "Error getting check in's",
  getOrganizationsError: 'Error getting organizations',
  getRetroErrorMessage: 'error getting retro',
  getRetrosErrorMessage: 'error getting retros',
  getStoryboardErrorMessage: 'error getting storyboard',
  getStoryboardsErrorMessage: 'error getting storyboards',
  getTeamsError: 'Error getting teams',
  getUserError: 'Error getting user',
  getUsersError: 'Error getting users',
  goalsMet: 'Goals Met',
  group: 'Group',
  groupName: 'Group Name',
  groupPhaseDescription: 'Drag and drop comments to group them together',
  hostedDesc:
    '{linkOpen}Thunderdome.dev{linkClose} is a free hosted service (SaaS) without Ads.',
  hostedOrSelfHosted: 'Hosted service or self-hosted',
  importCsv:
    '{friendly|{false:Import plans from a CSV file, true:Import stories from a CSV file}}',
  importCsvFileBadFileTypeError: 'Error bad file type',
  importCsvFileReadFileError: 'Error reading file',
  importJiraXML:
    '{friendly|{false:Import plans from Jira XML, true:Import stories from Jira XML}}',
  importJiraXMLBadFileTypeError: 'Error bad file type',
  importJiraXMLReadFileError: 'Error reading file',
  incorrectPassCode: 'Incorrect passcode',
  inviteLinkCopyFailure: "Couldn't copy invite link to clipboard",
  inviteLinkCopySuccess: 'Invite Link copied to clipboard',
  jiraXmlImport: 'Jira XML Import',
  joinCodeCopyFailure: "Couldn't copy passcode to clipboard",
  joinCodeCopySuccess: 'Passcode copied to clipboard',
  joinCodeLabelOptional: 'Join Code (Optional)',
  joinCodePlaceholder: 'Enter a join code',
  joinRetro: 'Join Retro',
  joinStoryboard: 'Join Storyboard',
  joinStoryboardError: 'Error joining storyboard, refresh and try again.',
  landingCountries: {
    true: 'Users in over {count} countries',
    false: 'Warriors in over {count} countries',
  },
  landingFeatureOpenSourceText:
    'Check out the {repoOpen}Github repository{repoClose} to request or contribute enhancements, locale translations and bug fixes or to {donateOpen}Donate{donateClose}.',
  landingFeatureOpenSourceTitle: 'Open Source',
  landingSalesPitch:
    'Remote team collaboration with agile story pointing, sprint retrospective, story mapping and async team check-in.',
  landingTitle:
    '{friendly|{false:Thunderdome is an Agile Planning Poker app with a fun theme, true:Thunderdome is an Agile Planning Poker app}}',
  lastActive: 'Last Active',
  leader: 'Leader',
  leaderPasscode: 'Leader code',
  leaveRetro: 'Leave Retro',
  leaveStoryboard: 'Leave Storyboard',
  legendRetroPlaceholder: 'Enter a color legend',
  loadingRetro: 'Loading Retro...',
  loadingStoryboard: 'Loading Storyboard...',
  login: 'Login',
  loginForRetro: 'or {loginOpen}Login{loginClose} to join the Retro',
  loginForStoryboard: 'or {loginOpen}Login{loginClose} to join the Storyboard',
  logout: 'Logout',
  logoutError:
    '{friendly|{false:Error encountered attempting to logout warrior, true:Error encountered attempting to logout user}}',
  makeFacilitator: 'Make Facilitator',
  mfa2faLabel: '2FA/MFA Auth',
  mfa2faRemove: 'Remove 2FA/MFA',
  mfa2faRemoveFailure: 'Failed to remove 2FA/MFA',
  mfa2faRemoveSuccess: '2FA/MFA successfully removed',
  mfa2faRemoveText: 'Are you sure you want to remove 2FA/MFA?',
  mfa2faSetup: 'Setup 2FA/MFA',
  mfaAuthError: 'Error validating authenticator token',
  mfaConfirmToken: 'Confirm Token',
  mfaGenerateFailed: 'failed to start 2FA/MFA setup',
  mfaSecretKeyLabel: 'Secret Key',
  mfaSetupFailed: 'failed to validate 2FA/MFA setup token',
  mfaSetupIntro:
    'Scan the following QR code with an Authenticator Application (such as Google Authenticator or Authy) and enter the generated token.',
  mfaSetupSuccess: 'successfully enabled 2FA/MFA',
  mfaTokenLabel: 'Authenticator Token',
  mfaTokenPlaceholder: 'Enter token from authenticator app',
  myRetros: 'My Retros',
  myStoryboards: 'My Storyboards',
  name: 'Name',
  needsImprovement: 'Needs Improvement',
  nextPhase: 'Next Phase',
  noComments: 'No comments...',
  oldBattleCleanError:
    '{friendly|{false:Error encountered cleaning battles, true:Error encountered cleaning games}}',
  oldGuestsCleanError: 'Error encountered cleaning guests',
  oldRetrosCleanError: 'Error encountered cleaning retros',
  oldStoryboardsCleanError: 'Error encountered cleaning storyboards',
  openSource: 'Open Source',
  optional: '(Optional)',
  optionalLeadercodePlaceholder: 'Optional leader code to become a leader',
  optionalPasscodePlaceholder: 'Optional passcode to join',
  organization: 'Organization',
  organizationCreate: 'Create Organization',
  organizationDeleteError: 'Error attempting to delete organization',
  organizationDeleteSuccess: 'Organization deleted successfully.',
  organizationGetDepartmentsError: 'Error getting organization departments',
  organizationGetError: 'Error getting organization',
  organizationGetTeamsError: 'Error getting organization teams',
  organizationGetUsersError: 'Error getting organization users',
  organizationName: 'Organization Name',
  organizationNamePlaceholder: 'Enter an organization name',
  organizations: 'Organizations',
  organizationsAndTeams: 'Organizations and Teams',
  organizationSave: 'Save Organization',
  owner: 'Owner',
  participation: 'Participation',
  passCode: 'Passcode',
  passCodeRequired: 'Passcode required to join',
  personas: "Persona's",
  planAcceptanceCriteria: 'Acceptance Criteria',
  planAcceptanceCriteriaPlaceholder: 'Enter acceptance criteria',
  planAdd: '{friendly|{false:Add Plan, true:Add Stories}}',
  planDescription: 'Description',
  planDescriptionPlaceholder: 'Enter a description',
  planLink: 'Link',
  planLinkInvalid:
    "Link isn't a valid absolute URL, e.g. includes protocol (HTTP/HTTPS)",
  planLinkPlaceholder:
    '{friendly|{false:Enter a link to plan, true:Enter a link to story}}',
  planName: '{friendly|{false:Plan Name, true:Story Name}}',
  planNamePlaceholder:
    '{friendly|{false:Enter a plan name, true:Enter a story name}}',
  planPriority: 'Priority',
  planPriorityBlocker: 'Blocker',
  planPriorityHigh: 'High',
  planPriorityHighest: 'Highest',
  planPriorityLow: 'Low',
  planPriorityLowest: 'Lowest',
  planPriorityMedium: 'Medium',
  planPriorityPlaceholder: 'Select a priority',
  planReferenceId: 'Reference ID',
  planReferenceIdPlaceholder: 'Enter a reference ID',
  plans: '{friendly|{false:Plans, true:Stories}}',
  planSkip: '{friendly|{false:Skip Plan, true:Skip Story}}',
  planType: '{friendly|{false:Plan Type, true:Story Type}}',
  planTypeBug: 'Bug',
  planTypeEpic: 'Epic',
  planTypePlaceholder: 'Types',
  planTypeSpike: 'Spike',
  planTypeStory: 'Story',
  planTypeSubtask: 'Subtask',
  planTypeTask: 'Task',
  pointAverageRounding: 'Point Average Rounding',
  pointed: 'Pointed ({count})',
  points: 'Points',
  pointValuesAllowed: 'Point Values Allowed',
  postComment: 'Post Comment',
  primeDirective: 'Prime Directive',
  promote: 'Promote',
  promoteUserError: 'Error encountered promoting user',
  questions: 'Questions',
  register: 'Register',
  registerForRetro:
    'or {registerOpen}Register{registerClose} to join the Retro',
  registerForStoryboard:
    'or {registerOpen}Register{registerClose} to join the Storyboard',
  reloadingRetro: 'Oops, reloading Retro...',
  reloadingStoryboard: 'Oops, reloading Storyboard...',
  remove: 'Remove',
  removeBattle: '{friendly|{false:Remove Battle, true:Remove Game}}',
  removeBattleConfirmText:
    '{friendly|{false:Are you sure you want to remove this battle?, true:Are you sure you want to remove this game?}}',
  removeRetro: 'Remove Retro',
  removeRetroConfirmText: 'Are you sure you want to remove this retro?',
  removeStoryboard: 'Remove Storyboard',
  removeStoryboardConfirmText:
    'Are you sure you want to remove this storyboard?',
  removeUser: 'Remove User',
  removeUserConfirmText: 'Are you sure you want to remove this user?',
  requestVerifyEmail: 'Request Verification Email',
  requestVerifyEmailFailure: 'Error attempting to send Verification Email',
  requestVerifyEmailSuccess: 'Verification Email requested, watch your inbox',
  retro: 'Retro',
  retroActionCommentAddError: 'error adding retro action comment',
  retroActionCommentDeleteError: 'error deleting retro action comment',
  retroActionCommentEditError: 'error editing retro action comment',
  retroActionItems: 'Retro Action Items',
  retroAddError: 'Error attempting to add retro.',
  retroAddSuccess: 'Retro added successfully.',
  retroDeleted: 'Retro deleted',
  retroFeedbackConcealed: 'Feedback Concealed',
  retroFeedbackHidden: 'Feedback Hidden',
  retroImprovePlaceholder: 'What needs improvement...',
  retroItems: 'Retro Items',
  retroJoinError: 'Error joining retro, refresh and try again.',
  retroMaxVotesPerUserLabel: 'Max Group Votes (per User)',
  retroName: 'Retro Name',
  retroNamePlaceholder: 'Enter a retro name',
  retroQuestionPlaceholder: 'I want to ask...',
  retroRemoveError: 'Error attempting to remove retro.',
  retroRemoveSuccess: 'Retro removed successfully.',
  retros: 'Retros',
  retroWorkedPlaceholder: 'What worked well...',
  role: 'Role',
  rolePlaceholder: 'Select users role',
  save: 'Save',
  search: 'Search',
  searchLengthError: 'Search value must be at least 3 characters',
  selectTeam: 'Select a Team',
  selfHostedDesc:
    'Alternatively you can {linkOpen}run it on your own server{linkClose}.',
  sendResetEmail: 'Send Reset Email',
  sessionDuplicate:
    '{friendly|{false:Duplicate battle session exists for your ID, true:Duplicate game session exists for your ID}}',
  showActiveBattles:
    '{friendly|{false:Show Active Battles, true:Show Active Games}}',
  showActiveRetros: 'Show active retros',
  showActiveStoryboards: 'Show active storyboards',
  showBlockedCheckins: 'Show only checkins requiring discussion',
  showCompletedActionItems: 'Show Completed Action Items',
  showVoters: 'Show Voters',
  skipped: 'Skipped',
  spectator: 'Spectator',
  storyboard: 'Storyboard',
  storyboardAddColumn: 'Add Column',
  storyboardAddError: 'Error attempting to add storyboard.',
  storyboardAddGoal: 'Add Goal',
  storyboardAddStoryToColumn: 'Add Story to Column',
  storyboardAddSuccess: 'Storyboard added successfully.',
  storyboardColumns: 'Storyboard Columns',
  storyboardDeleted: 'Storyboard deleted',
  storyboardEditColumn: 'Edit Column',
  storyboardGoalName: 'Goal name',
  storyboardGoalNamePlaceholder: 'Enter a goal name',
  storyboardGoals: 'Storyboard Goals',
  storyboardPersonas: 'Storyboard Personas',
  storyboardRemoveError: 'Error attempting to remove storyboard.',
  storyboardRemoveSuccess: 'Storyboard removed successfully.',
  storyboards: 'Storyboards',
  storyboardStories: 'Storyboard Stories',
  team: 'Team',
  teamCheckins: 'Team Checkins',
  teamCreate: 'Create Team',
  teamCreateError: 'Error attempting to create team.',
  teamCreateSuccess: 'Team created successfully.',
  teamDeleteError: 'Error attempting to delete team',
  teamDeleteSuccess: 'Team deleted successfully.',
  teamGetBattlesError:
    '{friendly|{false:Error getting team battles, true:Error getting team games}}',
  teamGetError: 'Error getting team',
  teamGetRetroActionsError: 'error getting retro actions',
  teamGetRetrosError: 'Error getting team retros',
  teamGetStoryboardsError: 'Error getting team storyboards',
  teamGetUsersError: 'Error getting team users',
  teamName: 'Team Name',
  teamNamePlaceholder: 'Enter an team name',
  teams: 'Teams',
  teamSave: 'Save Team',
  teamUserRequiredToCheckin: 'User must be in team to check in',
  teamUserRequiredToComment: 'User must be in team to comment',
  today: 'Today',
  todayPlaceholder: 'Today I will...',
  totalPoints: 'Total',
  totalVotes: 'Total Votes',
  type: 'Type',
  unknownWarrior: '{friendly|{false:Unknown Warrior, true:Unknown Player}}',
  unpointed: 'Unpointed ({count})',
  updateActionItemError: 'Error updating action item',
  updateActionItemSuccess: 'Action item updated successfully',
  updateAlertError: 'Error encountered updating alert',
  updateAlertSuccess: 'Alert updating successfully',
  updateCheckinError: 'Error updating check in',
  updateComment: 'Update Comment',
  userAdd: 'Add User',
  userAddError: 'Error attempting to add user.',
  userAddSuccess: 'User added successfully.',
  userEmail: 'User Email',
  userEmailPlaceholder: 'Enter a registered users email',
  userName: 'User Name',
  userRemoveError: 'Error attempting to remove user.',
  userRemoveSuccess: 'User removed successfully.',
  users: 'Users',
  verifyAccount: 'Verify Account',
  verifyAccountFailedError:
    'Something went wrong verifying your account, perhaps this link expired or was already used.',
  verifyAccountFailedTitle: 'Verification Failed',
  verifyAccountLoading: 'Verifying Account...',
  verifyAccountVerifiedThanks: 'Thanks for verifying your email.',
  verifyAccountVerifiedTitle: 'Account Verified',
  view: 'View',
  vote: 'Vote',
  voteCount: 'Vote Count',
  votePhaseDescription: "Vote for the groups you'd like to discuss most",
  voteResultsAverage: 'Average',
  voteResultsHighest: 'Highest',
  votingFinish: 'Finish Voting',
  votingLocked: 'Voting Locked',
  votingRestart: 'Restart Voting',
  warriorCreate: '{friendly|{false:Create Warrior, true:Create User}}',
  warriorInvite: '{friendly|{false:Invite a Warrior, true:Invite a Player}}',
  warriorNudge: 'Nudge',
  works: 'Works',
  writeCommentPlaceholder: 'Write a comment...',
  yesterday: 'Yesterday',
  yesterdayPlaceholder: 'Yesterday I...',
  yourRetros: 'Your Retros',
  yourStoryboards: 'Your Storyboards',
  addPlan: '{friendly|{false:Add Plan, true:Add Story}}',
  battleNamePlaceholder:
    '{friendly|{false:Enter a battle name, true:Enter a game name}}',
  autoFinishVotingLabel:
    '{friendly|{false:Auto Finish Voting when all Warriors have voted, true:Auto Finish Voting when all Players have voted}}',
  averageRoundingOptions: {
    ceil: 'Ceil',
    floor: 'Floor',
    round: 'Round',
  },
  apiKeyCreateButton: 'Create API Key',
  apiKeyPrefix: 'Key Prefix',
  lastUpdated: 'Last Updated',
  apiKeysErrorRetrieving: 'Failed to get API keys',
  apiKeyDeleteSuccess: 'API Key deleted',
  apiKeyDeleteFailed: 'Failed to delete API Key',
  apiKeyUpdateSuccess: 'API Key updated',
  apiKeyUpdateFailed: 'Failed to update API Key',
  deactivate: 'Deactivate',
  profileErrorRetrieving: 'Error getting your profile',
  profileErrorUpdating: 'Error encountered updating your profile',
  profileUpdateSuccess: 'Profile updated',
  passwordUpdated: 'Password updated.',
  passwordUpdateError: 'Error encountered attempting to update password',
  profileDeleteError: 'Error encountered attempting to delete your account.',
  profileTitle: 'Your Profile',
  updatePassword: 'Update Password',
  deleteAccount: 'Delete Account',
  deleteAccountWarningStatement:
    'Are you sure you want to delete your account?',
  deleteConfirmButton: 'Confirm Delete',
  apiKeyNameInvalid: 'Please enter a key name',
  apiKeyCreateSuccess:
    'New Api Key {keyName} created and {onlyNowOpen}it will be displayed only now{onlyNowClose}',
  apiKeyStoreWarning:
    'Please store it somewhere safe because as soon as you navigate away from this page, we will not be able to retrieve or restore this generated token.',
  apiKeyLimitReached: 'You have the max number of API keys allowed.',
  apiKeyUnverifiedUser: 'Only verified registered users can create API keys.',
  apiKeyCreateFailed: 'Failed to create API Key',
  apiKeyName: 'Key Name',
  apiKeyNamePlaceholder: 'Enter a Key Name',
  create: 'Create',
  close: 'Close',
  country: 'Country',
  company: 'Company',
  verified: 'Verified',
  registeredUsers: 'Registered Users',
  myBattles: '{friendly|{false:My Battles, true:My Games}}',
  createBattle: '{friendly|{false:Create Battle, true:Create Game}}',
  countPlansPointed: {
    true: '{totalPointed} of {totalPlans} stories pointed',
    false: '{totalPointed} of {totalPlans} plans pointed',
  },
  myBattlesError:
    '{friendly|{false:Error finding your battles, true:Error finding your games}}',
  warriorJoined: {
    true: '{name} has joined the game',
    false: '{name} has joined the battle',
  },
  warriorRetreated: {
    true: '{name} has left the game',
    false: '{name} has retreated from the battle',
  },
  planSkipped: '{friendly|{false:Plan skipped, true:Story skipped}}',
  warriorVoted: '{name} has voted',
  warriorRetractedVote: '{name} has retracted vote',
  battleDeleted: '{friendly|{false:Battle deleted, true:Game deleted}}',
  warriorNudgeMessage: 'pst... {name}, waiting on you to vote.',
  battle: '{friendly|{false:Battle, true:Game}}',
  warriors: '{friendly|{false:Warriors, true:Players}}',
  battleSocketReconnecting:
    '{friendly|{false:Ooops reloading Battle Plans..., true:Ooops reloading Game...}}',
  battleSocketError:
    '{friendly|{false:Error joining battle refresh and try again., true:Error joining game refresh and try again.}}',
  battleLoading:
    '{friendly|{false:Loading Battle Plans..., true:Loading Game...}}',
  votingNotStarted: 'Voting not started',
  password: 'Password',
  passwordPlaceholder: 'Enter a password',
  yourPasswordPlaceholder: 'Enter your password',
  confirmPassword: 'Confirm Password',
  confirmPasswordPlaceholder: 'Confirm your password',
  update: 'Update',
  reset: 'Reset',
  passwordResetError: 'Error encountered attempting to reset password',
  resetPassword: 'Reset Password',
  forgotPasswordCheckboxLabel: 'Forgot Password?',
  registerAsGuest: 'Register as Guest',
  registrationDisabled: 'Registration is disabled.',
  userNamePlaceholder: 'Enter your name',
  guestRegisterError: 'Error encountered trying to register as guest',
  registerError: 'Error encountered trying to register account',
  enlistToBattle: 'Enlist to Battle',
  loginForBattle: {
    true: 'or {loginOpen}Login{loginClose} to join the Game',
    false: 'or {loginOpen}Login{loginClose} to join the Battle',
  },
  yourNamePlaceholder: 'Enter your name',
  createAccountFormTitle:
    'Create an Account {optionalOpen}(optional){optionalClose}',
  sendResetPasswordSuccess: 'Password reset instructions sent to {email}',
  sendResetPasswordError: 'Error encountered attempting to send password reset',
  registerForBattle: {
    true: 'or {registerOpen}Register{registerClose} to join the Game',
    false: 'or {registerOpen}Register{registerClose} to join the Battle',
  },
  chooseCountryPlaceholder: 'Choose your country (optional)',
  locale: 'Locale',
  companyPlaceholder: 'Enter your company (optional)',
  jobTitle: 'Job Title',
  jobTitlePlaceholder: 'Enter your job title (optional)',
  enableBattleNotifications:
    '{friendly|{false:Enable battle notifications, true:Enable game notifications}}',
  avatar: 'Avatar',
  updateProfile: 'Update Profile',
  guestUsers: 'Guest Users',
  maintenance: 'Maintenance',
  cleanGuests: 'Clean Guests older than {daysOld} days',
  cleanBattles: {
    true: 'Clean Games older than {daysOld} days',
    false: 'Clean Battles older than {daysOld} days',
  },
  chooseLocalePlaceholder: 'Choose your preferred locale (optional)',
  importPlans: '{friendly|{false:Import Plans, true:Import Stories}}',
  selectFile: 'Select file...',
  theme: 'Theme',
  assignees: 'Assignees',
  assigneeSelectPlaceholder: 'Select an assignee to add',
  assigneeAdd: 'Add Assignee',
  allStoryWithCount: 'All ({count})',
};

export default fa;
