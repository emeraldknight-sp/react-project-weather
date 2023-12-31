import styled from "styled-components";

export const StyledButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
	flex: 1;

	padding: 0.5rem 1rem;
	border: 3px solid var(--transparent);
	border-radius: 8px;
	cursor: pointer;

	outline: none;

	font-family: var(--fontFamilyLato);
	font-size: var(--text-lg);
	line-height: var(--line-height-md);
	font-weight: 600;

	&.button--contained {
		background-color: var(--primary-color, #007bff);
		color: var(--white, #fff);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		transition: background-color 0.3s ease;

		&:hover {
			background-color: var(--charcoal, #0056b3);
		}
	}

	&.button--text {
		background-color: var(--transparent);
		transition: all 0.3s ease;
		color: var(--charcoal);

		&:hover {
			color: var(--primary-color);
		}
	}

	&.button--outlined {
	}
`;
