/**
 * Build cookie string using givin options
 * @param  {string} key       Key for cookie
 * @param  {string} value     Value for cookie
 * @param  {Object} [opts={}] Additional options e.g. path or domain
 * @return {string}           Representation of cookie that can be stored
 */
module.exports = function (key, value, opts = {}) {
	const {path, domain, maxAge, expires, secure} = opts;

		// Encoding of key and value
	key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent).replace(/\(/g, '%28').replace(/\)/g, '%29');
	value = (String(value)).replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);

	const cookieStr = [
		`${key && value ? key + '=' + value : ''}`,
		`${path ? ';path=' + path : ''}`,
		`${domain ? ';domain=' + domain : ''}`,
		`${maxAge ? ';max-age=' + maxAge : ''}`,
		`${expires ? ';expires=' + expires.toUTCString() : ''}`,
		`${secure ? ';secure' : ''}`
	].join('');

	return cookieStr;
};
