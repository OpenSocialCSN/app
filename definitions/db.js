require('dbms').init(CONF.database, null, ERROR('dbms'));

ON('ready', function() {
	DBMS().modify('tbl_user', { isonline: false }).where('isonline', true);
});