export const mockForecast = {
	location: {
		name: "London",
		region: "City of London, Greater London",
		country: "United Kingdom",
		lat: 51.52,
		lon: -0.11,
		tz_id: "Europe/London",
		localtime_epoch: 1685555616,
		localtime: "2023-05-31 18:53",
	},
	current: {
		last_updated_epoch: 1685555100,
		last_updated: "2023-05-31 18:45",
		temp_c: 17.0,
		temp_f: 62.6,
		is_day: 1,
		condition: {
			text: "Partly cloudy",
			icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
			code: 1003,
		},
		wind_mph: 16.1,
		wind_kph: 25.9,
		wind_degree: 40,
		wind_dir: "NE",
		pressure_mb: 1025.0,
		pressure_in: 30.27,
		precip_mm: 0.0,
		precip_in: 0.0,
		humidity: 63,
		cloud: 50,
		feelslike_c: 17.0,
		feelslike_f: 62.6,
		vis_km: 10.0,
		vis_miles: 6.0,
		uv: 5.0,
		gust_mph: 15.0,
		gust_kph: 24.1,
		air_quality: {
			co: 203,
			no2: 6.599999904632568,
			o3: 85.80000305175781,
			so2: 3.0,
			pm2_5: 2.799999952316284,
			pm10: 5.599999904632568,
			"us-epa-index": 1,
			"gb-defra-index": 1,
		},
	},
	forecast: {
		forecastday: [
			{
				date: "2023-05-31",
				date_epoch: 1685491200,
				day: {
					maxtemp_c: 22.3,
					maxtemp_f: 72.1,
					mintemp_c: 10.2,
					mintemp_f: 50.4,
					avgtemp_c: 15.2,
					avgtemp_f: 59.4,
					maxwind_mph: 13.4,
					maxwind_kph: 21.6,
					totalprecip_mm: 0.0,
					totalprecip_in: 0.0,
					totalsnow_cm: 0.0,
					avgvis_km: 10.0,
					avgvis_miles: 6.0,
					avghumidity: 67.0,
					daily_will_it_rain: 0,
					daily_chance_of_rain: 0,
					daily_will_it_snow: 0,
					daily_chance_of_snow: 0,
					condition: {
						text: "Partly cloudy",
						icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
						code: 1003,
					},
					uv: 5.0,
					air_quality: {
						co: 206.092001953125,
						no2: 5.563999986648559,
						o3: 83.3440005493164,
						so2: 3.1720000076293946,
						pm2_5: 2.6280000019073486,
						pm10: 5.500000019073486,
						"us-epa-index": 1,
						"gb-defra-index": 1,
					},
				},
				astro: {
					sunrise: "04:50 AM",
					sunset: "09:07 PM",
					moonrise: "04:49 PM",
					moonset: "03:06 AM",
					moon_phase: "Waxing Gibbous",
					moon_illumination: "81",
					is_moon_up: 1,
					is_sun_up: 0,
				},
				hour: [
					{
						time_epoch: 1685487600,
						time: "2023-05-31 00:00",
						temp_c: 11.8,
						temp_f: 53.2,
						is_day: 0,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
							code: 1006,
						},
						wind_mph: 11.2,
						wind_kph: 18.0,
						wind_degree: 47,
						wind_dir: "NE",
						pressure_mb: 1028.0,
						pressure_in: 30.36,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 67,
						cloud: 80,
						feelslike_c: 9.8,
						feelslike_f: 49.6,
						windchill_c: 9.8,
						windchill_f: 49.6,
						heatindex_c: 11.8,
						heatindex_f: 53.2,
						dewpoint_c: 5.9,
						dewpoint_f: 42.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 15.2,
						gust_kph: 24.5,
						uv: 1.0,
						air_quality: {
							co: 203,
							no2: 3.5999999046325684,
							o3: 78.0,
							so2: 2.4000000953674316,
							pm2_5: 3.0999999046325684,
							pm10: 6.300000190734863,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685491200,
						time: "2023-05-31 01:00",
						temp_c: 11.8,
						temp_f: 53.2,
						is_day: 0,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
							code: 1006,
						},
						wind_mph: 11.0,
						wind_kph: 17.6,
						wind_degree: 49,
						wind_dir: "NE",
						pressure_mb: 1028.0,
						pressure_in: 30.36,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 67,
						cloud: 79,
						feelslike_c: 9.9,
						feelslike_f: 49.8,
						windchill_c: 9.9,
						windchill_f: 49.8,
						heatindex_c: 11.8,
						heatindex_f: 53.2,
						dewpoint_c: 5.9,
						dewpoint_f: 42.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 15.0,
						gust_kph: 24.1,
						uv: 1.0,
						air_quality: {
							co: 205.3000030517578,
							no2: 3.200000047683716,
							o3: 81.5,
							so2: 2.5,
							pm2_5: 2.799999952316284,
							pm10: 6.300000190734863,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685494800,
						time: "2023-05-31 02:00",
						temp_c: 11.6,
						temp_f: 52.9,
						is_day: 0,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
							code: 1006,
						},
						wind_mph: 10.1,
						wind_kph: 16.2,
						wind_degree: 40,
						wind_dir: "NE",
						pressure_mb: 1028.0,
						pressure_in: 30.35,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 70,
						cloud: 83,
						feelslike_c: 9.8,
						feelslike_f: 49.6,
						windchill_c: 9.8,
						windchill_f: 49.6,
						heatindex_c: 11.6,
						heatindex_f: 52.9,
						dewpoint_c: 6.4,
						dewpoint_f: 43.5,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.6,
						gust_kph: 22.0,
						uv: 1.0,
						air_quality: {
							co: 205.3000030517578,
							no2: 3.0999999046325684,
							o3: 83.69999694824219,
							so2: 2.5999999046325684,
							pm2_5: 2.700000047683716,
							pm10: 6.400000095367432,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685498400,
						time: "2023-05-31 03:00",
						temp_c: 11.1,
						temp_f: 52.0,
						is_day: 0,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
							code: 1006,
						},
						wind_mph: 9.4,
						wind_kph: 15.1,
						wind_degree: 32,
						wind_dir: "NNE",
						pressure_mb: 1027.0,
						pressure_in: 30.34,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 76,
						cloud: 83,
						feelslike_c: 9.3,
						feelslike_f: 48.7,
						windchill_c: 9.3,
						windchill_f: 48.7,
						heatindex_c: 11.1,
						heatindex_f: 52.0,
						dewpoint_c: 7.1,
						dewpoint_f: 44.8,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 12.8,
						gust_kph: 20.5,
						uv: 1.0,
						air_quality: {
							co: 207.0,
							no2: 3.0999999046325684,
							o3: 83.0,
							so2: 2.700000047683716,
							pm2_5: 2.700000047683716,
							pm10: 7.099999904632568,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685502000,
						time: "2023-05-31 04:00",
						temp_c: 10.8,
						temp_f: 51.4,
						is_day: 0,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
							code: 1006,
						},
						wind_mph: 8.9,
						wind_kph: 14.4,
						wind_degree: 32,
						wind_dir: "NNE",
						pressure_mb: 1027.0,
						pressure_in: 30.34,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 79,
						cloud: 85,
						feelslike_c: 9.0,
						feelslike_f: 48.2,
						windchill_c: 9.0,
						windchill_f: 48.2,
						heatindex_c: 10.8,
						heatindex_f: 51.4,
						dewpoint_c: 7.2,
						dewpoint_f: 45.0,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 12.5,
						gust_kph: 20.2,
						uv: 1.0,
						air_quality: {
							co: 207.0,
							no2: 3.0999999046325684,
							o3: 82.30000305175781,
							so2: 2.700000047683716,
							pm2_5: 2.799999952316284,
							pm10: 7.5,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685505600,
						time: "2023-05-31 05:00",
						temp_c: 11.0,
						temp_f: 51.8,
						is_day: 1,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
							code: 1006,
						},
						wind_mph: 9.2,
						wind_kph: 14.8,
						wind_degree: 31,
						wind_dir: "NNE",
						pressure_mb: 1028.0,
						pressure_in: 30.34,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 78,
						cloud: 82,
						feelslike_c: 9.2,
						feelslike_f: 48.6,
						windchill_c: 9.2,
						windchill_f: 48.6,
						heatindex_c: 11.0,
						heatindex_f: 51.8,
						dewpoint_c: 7.3,
						dewpoint_f: 45.1,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 12.1,
						gust_kph: 19.4,
						uv: 3.0,
						air_quality: {
							co: 207.0,
							no2: 3.5,
							o3: 80.80000305175781,
							so2: 2.799999952316284,
							pm2_5: 2.799999952316284,
							pm10: 7.400000095367432,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685509200,
						time: "2023-05-31 06:00",
						temp_c: 11.4,
						temp_f: 52.5,
						is_day: 1,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
							code: 1006,
						},
						wind_mph: 9.8,
						wind_kph: 15.8,
						wind_degree: 32,
						wind_dir: "NNE",
						pressure_mb: 1028.0,
						pressure_in: 30.34,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 76,
						cloud: 81,
						feelslike_c: 9.6,
						feelslike_f: 49.3,
						windchill_c: 9.6,
						windchill_f: 49.3,
						heatindex_c: 11.4,
						heatindex_f: 52.5,
						dewpoint_c: 7.4,
						dewpoint_f: 45.3,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 12.5,
						gust_kph: 20.2,
						uv: 3.0,
						air_quality: {
							co: 207.0,
							no2: 5.300000190734863,
							o3: 75.80000305175781,
							so2: 3.200000047683716,
							pm2_5: 2.9000000953674316,
							pm10: 8.300000190734863,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685512800,
						time: "2023-05-31 07:00",
						temp_c: 12.1,
						temp_f: 53.8,
						is_day: 1,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
							code: 1006,
						},
						wind_mph: 10.7,
						wind_kph: 17.3,
						wind_degree: 40,
						wind_dir: "NE",
						pressure_mb: 1028.0,
						pressure_in: 30.34,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 73,
						cloud: 86,
						feelslike_c: 10.3,
						feelslike_f: 50.5,
						windchill_c: 10.3,
						windchill_f: 50.5,
						heatindex_c: 12.1,
						heatindex_f: 53.8,
						dewpoint_c: 7.4,
						dewpoint_f: 45.3,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.4,
						gust_kph: 21.6,
						uv: 3.0,
						air_quality: {
							co: 208,
							no2: 7.400000095367432,
							o3: 73.69999694824219,
							so2: 3.299999952316284,
							pm2_5: 3.0,
							pm10: 7.5,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685516400,
						time: "2023-05-31 08:00",
						temp_c: 13.4,
						temp_f: 56.1,
						is_day: 1,
						condition: {
							text: "Overcast",
							icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
							code: 1009,
						},
						wind_mph: 11.2,
						wind_kph: 18.0,
						wind_degree: 45,
						wind_dir: "NE",
						pressure_mb: 1027.0,
						pressure_in: 30.34,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 68,
						cloud: 93,
						feelslike_c: 11.8,
						feelslike_f: 53.2,
						windchill_c: 11.8,
						windchill_f: 53.2,
						heatindex_c: 13.4,
						heatindex_f: 56.1,
						dewpoint_c: 7.7,
						dewpoint_f: 45.9,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.0,
						gust_kph: 20.9,
						uv: 3.0,
						air_quality: {
							co: 208,
							no2: 7.699999809265137,
							o3: 73.69999694824219,
							so2: 3.5,
							pm2_5: 2.9000000953674316,
							pm10: 5.900000095367432,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685520000,
						time: "2023-05-31 09:00",
						temp_c: 15.2,
						temp_f: 59.4,
						is_day: 1,
						condition: {
							text: "Overcast",
							icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
							code: 1009,
						},
						wind_mph: 10.7,
						wind_kph: 17.3,
						wind_degree: 48,
						wind_dir: "NE",
						pressure_mb: 1027.0,
						pressure_in: 30.33,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 63,
						cloud: 88,
						feelslike_c: 15.2,
						feelslike_f: 59.4,
						windchill_c: 15.2,
						windchill_f: 59.4,
						heatindex_c: 15.2,
						heatindex_f: 59.4,
						dewpoint_c: 8.2,
						dewpoint_f: 46.8,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 12.3,
						gust_kph: 19.8,
						uv: 4.0,
						air_quality: {
							co: 207.0,
							no2: 6.900000095367432,
							o3: 75.80000305175781,
							so2: 3.5999999046325684,
							pm2_5: 2.5999999046325684,
							pm10: 4.5,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685523600,
						time: "2023-05-31 10:00",
						temp_c: 17.0,
						temp_f: 62.6,
						is_day: 1,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							code: 1003,
						},
						wind_mph: 11.0,
						wind_kph: 17.6,
						wind_degree: 48,
						wind_dir: "NE",
						pressure_mb: 1027.0,
						pressure_in: 30.32,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 59,
						cloud: 60,
						feelslike_c: 17.0,
						feelslike_f: 62.6,
						windchill_c: 17.0,
						windchill_f: 62.6,
						heatindex_c: 17.0,
						heatindex_f: 62.6,
						dewpoint_c: 8.8,
						dewpoint_f: 47.8,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 12.5,
						gust_kph: 20.2,
						uv: 5.0,
						air_quality: {
							co: 207.0,
							no2: 6.099999904632568,
							o3: 80.0999984741211,
							so2: 3.700000047683716,
							pm2_5: 2.4000000953674316,
							pm10: 3.799999952316284,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685527200,
						time: "2023-05-31 11:00",
						temp_c: 18.6,
						temp_f: 65.5,
						is_day: 1,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							code: 1003,
						},
						wind_mph: 11.4,
						wind_kph: 18.4,
						wind_degree: 47,
						wind_dir: "NE",
						pressure_mb: 1026.0,
						pressure_in: 30.31,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 56,
						cloud: 47,
						feelslike_c: 18.6,
						feelslike_f: 65.5,
						windchill_c: 18.6,
						windchill_f: 65.5,
						heatindex_c: 18.6,
						heatindex_f: 65.5,
						dewpoint_c: 9.7,
						dewpoint_f: 49.5,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.2,
						gust_kph: 21.2,
						uv: 5.0,
						air_quality: {
							co: 205.3000030517578,
							no2: 5.5,
							o3: 85.0999984741211,
							so2: 3.700000047683716,
							pm2_5: 2.4000000953674316,
							pm10: 3.5,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685530800,
						time: "2023-05-31 12:00",
						temp_c: 19.8,
						temp_f: 67.6,
						is_day: 1,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							code: 1003,
						},
						wind_mph: 11.9,
						wind_kph: 19.1,
						wind_degree: 46,
						wind_dir: "NE",
						pressure_mb: 1026.0,
						pressure_in: 30.3,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 54,
						cloud: 34,
						feelslike_c: 19.8,
						feelslike_f: 67.6,
						windchill_c: 19.8,
						windchill_f: 67.6,
						heatindex_c: 19.8,
						heatindex_f: 67.6,
						dewpoint_c: 10.2,
						dewpoint_f: 50.4,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.6,
						gust_kph: 22.0,
						uv: 5.0,
						air_quality: {
							co: 205.3000030517578,
							no2: 5.300000190734863,
							o3: 89.4000015258789,
							so2: 3.5999999046325684,
							pm2_5: 2.4000000953674316,
							pm10: 3.799999952316284,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685534400,
						time: "2023-05-31 13:00",
						temp_c: 21.0,
						temp_f: 69.8,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000,
						},
						wind_mph: 11.9,
						wind_kph: 19.1,
						wind_degree: 48,
						wind_dir: "NE",
						pressure_mb: 1026.0,
						pressure_in: 30.29,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 50,
						cloud: 16,
						feelslike_c: 21.0,
						feelslike_f: 69.8,
						windchill_c: 21.0,
						windchill_f: 69.8,
						heatindex_c: 21.0,
						heatindex_f: 69.8,
						dewpoint_c: 10.3,
						dewpoint_f: 50.5,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.6,
						gust_kph: 22.0,
						uv: 6.0,
						air_quality: {
							co: 203,
							no2: 5.099999904632568,
							o3: 93.0,
							so2: 3.5999999046325684,
							pm2_5: 2.5,
							pm10: 4.199999809265137,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685538000,
						time: "2023-05-31 14:00",
						temp_c: 22.2,
						temp_f: 72.0,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000,
						},
						wind_mph: 12.3,
						wind_kph: 19.8,
						wind_degree: 54,
						wind_dir: "NE",
						pressure_mb: 1025.0,
						pressure_in: 30.28,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 48,
						cloud: 6,
						feelslike_c: 24.4,
						feelslike_f: 75.9,
						windchill_c: 22.2,
						windchill_f: 72.0,
						heatindex_c: 24.4,
						heatindex_f: 75.9,
						dewpoint_c: 10.8,
						dewpoint_f: 51.4,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 14.1,
						gust_kph: 22.7,
						uv: 6.0,
						air_quality: {
							co: 203,
							no2: 4.800000190734863,
							o3: 94.4000015258789,
							so2: 3.5,
							pm2_5: 2.5999999046325684,
							pm10: 4.599999904632568,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685541600,
						time: "2023-05-31 15:00",
						temp_c: 22.3,
						temp_f: 72.1,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000,
						},
						wind_mph: 12.8,
						wind_kph: 20.5,
						wind_degree: 60,
						wind_dir: "ENE",
						pressure_mb: 1025.0,
						pressure_in: 30.27,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 49,
						cloud: 5,
						feelslike_c: 24.5,
						feelslike_f: 76.1,
						windchill_c: 22.3,
						windchill_f: 72.1,
						heatindex_c: 24.5,
						heatindex_f: 76.1,
						dewpoint_c: 11.1,
						dewpoint_f: 52.0,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 14.8,
						gust_kph: 23.8,
						uv: 6.0,
						air_quality: {
							co: 201.89999389648438,
							no2: 4.599999904632568,
							o3: 95.80000305175781,
							so2: 3.200000047683716,
							pm2_5: 2.5999999046325684,
							pm10: 4.800000190734863,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685545200,
						time: "2023-05-31 16:00",
						temp_c: 21.2,
						temp_f: 70.2,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000,
						},
						wind_mph: 13.2,
						wind_kph: 21.2,
						wind_degree: 60,
						wind_dir: "ENE",
						pressure_mb: 1025.0,
						pressure_in: 30.27,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 52,
						cloud: 15,
						feelslike_c: 21.2,
						feelslike_f: 70.2,
						windchill_c: 21.2,
						windchill_f: 70.2,
						heatindex_c: 24.3,
						heatindex_f: 75.7,
						dewpoint_c: 10.9,
						dewpoint_f: 51.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 15.2,
						gust_kph: 24.5,
						uv: 6.0,
						air_quality: {
							co: 201.89999389648438,
							no2: 5.099999904632568,
							o3: 93.0,
							so2: 2.9000000953674316,
							pm2_5: 2.5,
							pm10: 4.699999809265137,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685548800,
						time: "2023-05-31 17:00",
						temp_c: 19.9,
						temp_f: 67.8,
						is_day: 1,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							code: 1003,
						},
						wind_mph: 13.4,
						wind_kph: 21.6,
						wind_degree: 57,
						wind_dir: "ENE",
						pressure_mb: 1025.0,
						pressure_in: 30.27,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 56,
						cloud: 30,
						feelslike_c: 19.9,
						feelslike_f: 67.8,
						windchill_c: 19.9,
						windchill_f: 67.8,
						heatindex_c: 19.9,
						heatindex_f: 67.8,
						dewpoint_c: 10.9,
						dewpoint_f: 51.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 15.4,
						gust_kph: 24.8,
						uv: 5.0,
						air_quality: {
							co: 201.89999389648438,
							no2: 6.0,
							o3: 89.4000015258789,
							so2: 2.9000000953674316,
							pm2_5: 2.5,
							pm10: 4.800000190734863,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685552400,
						time: "2023-05-31 18:00",
						temp_c: 18.4,
						temp_f: 65.1,
						is_day: 1,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							code: 1003,
						},
						wind_mph: 13.0,
						wind_kph: 20.9,
						wind_degree: 53,
						wind_dir: "NE",
						pressure_mb: 1025.0,
						pressure_in: 30.27,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 62,
						cloud: 28,
						feelslike_c: 18.4,
						feelslike_f: 65.1,
						windchill_c: 18.4,
						windchill_f: 65.1,
						heatindex_c: 18.4,
						heatindex_f: 65.1,
						dewpoint_c: 11.0,
						dewpoint_f: 51.8,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 15.0,
						gust_kph: 24.1,
						uv: 5.0,
						air_quality: {
							co: 203,
							no2: 6.599999904632568,
							o3: 85.80000305175781,
							so2: 3.0,
							pm2_5: 2.799999952316284,
							pm10: 5.599999904632568,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685556000,
						time: "2023-05-31 19:00",
						temp_c: 16.9,
						temp_f: 62.4,
						is_day: 1,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							code: 1003,
						},
						wind_mph: 11.2,
						wind_kph: 18.0,
						wind_degree: 48,
						wind_dir: "NE",
						pressure_mb: 1026.0,
						pressure_in: 30.29,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 69,
						cloud: 33,
						feelslike_c: 16.9,
						feelslike_f: 62.4,
						windchill_c: 16.9,
						windchill_f: 62.4,
						heatindex_c: 16.9,
						heatindex_f: 62.4,
						dewpoint_c: 11.2,
						dewpoint_f: 52.2,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.0,
						gust_kph: 20.9,
						uv: 5.0,
						air_quality: {
							co: 203,
							no2: 7.099999904632568,
							o3: 83.0,
							so2: 3.200000047683716,
							pm2_5: 3.0,
							pm10: 6.099999904632568,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685559600,
						time: "2023-05-31 20:00",
						temp_c: 14.2,
						temp_f: 57.6,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000,
						},
						wind_mph: 10.3,
						wind_kph: 16.6,
						wind_degree: 43,
						wind_dir: "NE",
						pressure_mb: 1026.0,
						pressure_in: 30.3,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 77,
						cloud: 0,
						feelslike_c: 12.9,
						feelslike_f: 55.2,
						windchill_c: 12.9,
						windchill_f: 55.2,
						heatindex_c: 14.2,
						heatindex_f: 57.6,
						dewpoint_c: 10.2,
						dewpoint_f: 50.4,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.6,
						gust_kph: 22.0,
						uv: 4.0,
						air_quality: {
							co: 205.3000030517578,
							no2: 7.5,
							o3: 79.4000015258789,
							so2: 3.299999952316284,
							pm2_5: 2.799999952316284,
							pm10: 5.800000190734863,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685563200,
						time: "2023-05-31 21:00",
						temp_c: 12.5,
						temp_f: 54.5,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000,
						},
						wind_mph: 10.3,
						wind_kph: 16.6,
						wind_degree: 40,
						wind_dir: "NE",
						pressure_mb: 1027.0,
						pressure_in: 30.31,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 80,
						cloud: 8,
						feelslike_c: 10.8,
						feelslike_f: 51.4,
						windchill_c: 10.8,
						windchill_f: 51.4,
						heatindex_c: 12.5,
						heatindex_f: 54.5,
						dewpoint_c: 9.2,
						dewpoint_f: 48.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 13.4,
						gust_kph: 21.6,
						uv: 4.0,
						air_quality: {
							co: 207.0,
							no2: 7.5,
							o3: 78.69999694824219,
							so2: 3.4000000953674316,
							pm2_5: 2.700000047683716,
							pm10: 5.5,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685566800,
						time: "2023-05-31 22:00",
						temp_c: 11.1,
						temp_f: 52.0,
						is_day: 0,
						condition: {
							text: "Clear",
							icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
							code: 1000,
						},
						wind_mph: 9.6,
						wind_kph: 15.5,
						wind_degree: 40,
						wind_dir: "NE",
						pressure_mb: 1027.0,
						pressure_in: 30.32,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 83,
						cloud: 20,
						feelslike_c: 9.2,
						feelslike_f: 48.6,
						windchill_c: 9.2,
						windchill_f: 48.6,
						heatindex_c: 11.1,
						heatindex_f: 52.0,
						dewpoint_c: 8.3,
						dewpoint_f: 46.9,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 12.3,
						gust_kph: 19.8,
						uv: 1.0,
						air_quality: {
							co: 210.3000030517578,
							no2: 7.599999904632568,
							o3: 78.69999694824219,
							so2: 3.4000000953674316,
							pm2_5: 2.5999999046325684,
							pm10: 5.300000190734863,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
					{
						time_epoch: 1685570400,
						time: "2023-05-31 23:00",
						temp_c: 10.2,
						temp_f: 50.4,
						is_day: 0,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
							code: 1003,
						},
						wind_mph: 9.2,
						wind_kph: 14.8,
						wind_degree: 40,
						wind_dir: "NE",
						pressure_mb: 1027.0,
						pressure_in: 30.32,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 85,
						cloud: 30,
						feelslike_c: 8.2,
						feelslike_f: 46.8,
						windchill_c: 8.2,
						windchill_f: 46.8,
						heatindex_c: 10.2,
						heatindex_f: 50.4,
						dewpoint_c: 7.8,
						dewpoint_f: 46.0,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 11.6,
						gust_kph: 18.7,
						uv: 1.0,
						air_quality: {
							co: 208,
							no2: 6.599999904632568,
							o3: 79.4000015258789,
							so2: 3.0999999046325684,
							pm2_5: 2.4000000953674316,
							pm10: 4.900000095367432,
							"us-epa-index": 1,
							"gb-defra-index": 1,
						},
					},
				],
			},
		],
	},
	alerts: {
		alert: [],
	},
};
