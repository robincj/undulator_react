import OverlayTrigger, { OverlayTriggerRenderProps } from 'react-bootstrap/OverlayTrigger';
import OverlayToolTip from 'react-bootstrap/Tooltip';
import { Placement } from 'react-bootstrap/Overlay';

interface Props {
    key?: string;
    placement?: Placement;
    id?: string;
    tip: string;
    children: React.ReactElement | ((props: OverlayTriggerRenderProps) => React.ReactNode);
}

export const Tooltip = (props: Props) =>
    <OverlayTrigger
        key={`${props.key || props.id || props.tip}_key`}
        placement={props.placement || "left"}
        overlay={
            <OverlayToolTip id={props.id || `${props.key}_tooltip`}>{props.tip}
            </OverlayToolTip>
        }
    >
        {props.children}
    </OverlayTrigger>
    ;

export default Tooltip;