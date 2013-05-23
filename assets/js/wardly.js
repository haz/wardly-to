

// Make sure you have imported jquery!!

var ward_mapping = {1: 'a',
                    2: 'b',
                    3: 'c',
                    4: 'd',
                    5: 'e',
                    6: 'f',
                    7: 'g',
                    8: 'h',
                    9: 'i',
                    10: 'j',
                    11: 'k',
                    12: 'l',
                    13: 'm',
                    14: 'n',
                    15: 'o',
                    16: 'p',
                    17: 'q',
                    18: 'r',
                    19: 's',
                    20: 't',
                    21: 'u',
                    22: 'v',
                    23: 'w',
                    24: 'x',
                    25: 'y',
                    26: 'z',
                    27: 'A',
                    28: 'B',
                    29: 'C',
                    30: 'D',
                    31: 'E',
                    32: 'F',
                    33: 'G',
                    34: 'H',
                    35: 'I',
                    36: 'J',
                    37: 'K',
                    38: 'L',
                    39: 'M',
                    40: 'N',
                    41: 'O',
                    42: 'P',
                    43: 'Q',
                    44: 'R'};

function insert_custom_map(wards, element, default_color) {
	
	var map = '';
    var group, index, ward;
	
	if (default_color) {
		var defined = {};
		for (group in wards) {
			for (index in wards[group].wards) {
				defined[wards[group].wards[index]] = true;
			}
		}
		for (var i=1; i<=44; ++i) {
			map += '<li class="default-ward">' + ward_mapping[i] + '</li>';
		}
	}
	
	for (group in wards) {
		for (index in wards[group].wards) {
			ward = wards[group].wards[index];
			map += '<li class="' + wards[group]['class'] + '">' + ward_mapping[ward] + '</li>';
		}
	}
	
	$(element).html(map);
	
	for (group in wards) {
		$('.' + wards[group].class).css('color', wards[group].color);
	}
	
	if (default_color) {
		$('.default-ward').css('color', default_color);
	}
}
