var queries = {
    countNodes: 'SELECT COUNT(*) FROM umbracoNode;',
    countProperties: 'SELECT COUNT(*) FROM cmsPropertyData;',
    countMembers: 'SELECT COUNT(*) FROM cmsMember;',
    countMemberGroups: 'SELECT COUNT(DISTINCT(MemberGroup)) from cmsMember2MemberGroup;',
    countUsers: 'SELECT COUNT(*) FROM umbracoUser;',
    countLogEntries: 'SELECT COUNT(*) FROM umbracoLog;',
    countDocumentTypes: 'SELECT COUNT(*) FROM cmsDocumentType;',
    countTrashedItems: 'SELECT COUNT(*) FROM umbracoNode WHERE trashed = 1;'
};

exports = module.exports = queries;