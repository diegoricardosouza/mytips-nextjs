import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, numquam.
        Saepe iusto animi commodi nemo architecto, cumque alias harum unde
        praesentium facere eaque assumenda repudiandae ut dignissimos. Nisi,
        praesentium nulla!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
